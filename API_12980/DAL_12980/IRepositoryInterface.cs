using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL_12980
{
    public interface IRepositoryInterface <T>
    {
        Task<IEnumerable<T>> GetAllAsync();
        Task<T?> GetByIDAsync(int id);
        Task AddAsync(T entity);
        Task UpdateAsync(int id, T entity);
        Task DeleteAsync(int id);
    }
}
