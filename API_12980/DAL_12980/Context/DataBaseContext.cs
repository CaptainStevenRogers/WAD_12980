using API_12980.Models;
using Microsoft.EntityFrameworkCore;

namespace DAL_12980.Context
{
    public class DataBaseContext : DbContext
    {
        public DbSet<StatusModel> Statuses { get; set; }
        public DbSet<TaskModel> Tasks { get; set; }
        public DataBaseContext(DbContextOptions<DataBaseContext> options) : base(options) 
        { }
    }
}
