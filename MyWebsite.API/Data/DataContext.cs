using Microsoft.EntityFrameworkCore;
using MyWebsite.API.Models;

namespace MyWebsite.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}
        public DbSet<Profile> Profiles {get; set;}
    }
}