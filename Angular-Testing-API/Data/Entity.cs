using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Web;

namespace Angular_Testing.Data
{
    public partial class ProductContext : DbContext
    {
        public ProductContext(): base("conn"){}

        public virtual DbSet<product> Products { get; set; }
        public virtual DbSet<tag> Tags { get; set; }


    }

    //public static class Extensions
    //{
    //    public static IQueryable<product> CompleteProducts(this ProductContext context)
    //    {
    //        return context.Products
    //            .Include("dbo.tag");
    //    }

    //    //public static Company CompanyById(this NameOfContext context, int companyID)
    //    //{
    //    //    return context.Companies
    //    //        .Include("Employee.Employee_Car")
    //    //        .Include("Employee.Employee_Country")
    //    //        .FirstOrDefault(c => c.Id == companyID);
    //    //}

    //}
}