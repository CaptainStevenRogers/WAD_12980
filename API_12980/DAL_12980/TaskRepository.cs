using API_12980.Models;
using DAL_12980.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL_12980
{
    public class TaskRepository : IRepositoryInterface<TaskModel>
    {
        private readonly DataBaseContext _context;
        public TaskRepository(DataBaseContext context) 
        { 
            _context = context;
        }

        public async Task AddAsync(TaskModel entity)
        {
            var status = await _context.Statuses.FirstOrDefaultAsync(x => x.Id == entity.Status.Id);
            if (status != null)
            {
                entity.Status = status;
            }
            await _context.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var task = await GetByIDAsync(id);
            if(task == null)
            {
                throw new ArgumentNullException();
            }
            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<TaskModel>> GetAllAsync()
        {
            return await _context.Tasks.Include(t => t.Status).ToListAsync();
        }

        public async Task<TaskModel?> GetByIDAsync(int id)
        {
            return await _context.Tasks.Include(t => t.Status).FirstOrDefaultAsync(t => t.Id == id);
        }

        public async Task UpdateAsync(int id, TaskModel entity)
        {
            var task = await GetByIDAsync(id);
            if (task == null)
            {
                throw new ArgumentNullException();
            }

            var status = await _context.Statuses.FirstOrDefaultAsync(x => x.Id == entity.Status.Id);

            _context.Entry(task).State = EntityState.Modified;

            task.Name = entity.Name;
            task.Description = entity.Description;
            task.DaysToComplete = entity.DaysToComplete;
            task.Status = status;
            
            await _context.SaveChangesAsync();
        }
    }
}
