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
    public class StatusRepository : IRepositoryInterface<StatusModel>
    {
        private readonly DataBaseContext _context;

        public StatusRepository(DataBaseContext context)
        {
            _context = context;
        }

        public async Task AddAsync(StatusModel entity)
        {
            _context.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var status = await GetByIDAsync(id);
            if (status == null)
            {
                throw new ArgumentNullException();
            }
            _context.Statuses.Remove(status);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<StatusModel>> GetAllAsync()
        {
            return await _context.Statuses.ToListAsync();
        }

        public async Task<StatusModel?> GetByIDAsync(int id)
        {
            return await _context.Statuses.FirstOrDefaultAsync(s => s.Id == id);
        }

        public async Task UpdateAsync(int id, StatusModel entity)
        {
            var status = await GetByIDAsync(id);
            if (status == null)
            {
                throw new ArgumentNullException();
            }
            _context.Entry(status).State = EntityState.Modified;
            status.Name = entity.Name;

            await _context.SaveChangesAsync();
        }
    }
}
