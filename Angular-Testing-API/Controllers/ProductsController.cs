using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using Angular_Testing.Data;

namespace Angular_Testing.Controllers
{
    [EnableCors(origins: "http://localhost:5000", headers: "*", methods: "*")]
    public class ProductsController : ApiController
    {
        private ProductContext db = new ProductContext();

        // GET: api/Products
        public IQueryable<product> GetProducts()
        {
            // return db.Products.Include(p => p.tags);
            return db.Products;
        }

        // GET: api/Products/5
        [ResponseType(typeof(product))]
        public IHttpActionResult Getproduct(int id)
        {
            var query = (from p in db.Products
                where p.id == id // && p.tags != null
                select new
                {
                    p.id,
                    p.productName,
                    p.productCode,
                    p.releaseDate,
                    p.price,
                    p.description,
                    p.starRating,
                    p.imageUrl,
                    p.tags
                }).SingleOrDefault();

            // string[] array = query?.tags.Split(',').ToArray();
            // Debug.Assert(query != null, nameof(query) + " != null");
            var array = query?.tags?.Split(',').ToArray();

            productVM prod = new productVM
            {
                id = query?.id,
                productName = query?.productName,
                productCode = query?.productCode,
                releaseDate = query?.releaseDate,
                price = query?.price,
                description = query?.description,
                starRating = query?.starRating,
                imageUrl = query?.imageUrl,
                tags = array
            };

            return Ok(prod);
        }

        // PUT: api/Products/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProduct(int id, productVM product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != product.id)
            {
                return BadRequest();
            }

            var prod = BuildProduct(product);
            db.Entry(prod).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!productExists(id))
                {
                    return NotFound();
                }

                throw;
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Products
        [ResponseType(typeof(product))]
        public IHttpActionResult Postproduct(productVM product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var prod = BuildProduct(product);
            db.Products.Add(prod);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = product.id }, product);
        }

        // DELETE: api/Products/5
        [ResponseType(typeof(product))]
        public IHttpActionResult Deleteproduct(int id)
        {
            product product = db.Products.Find(id);
            if (product == null)
            {
                return NotFound();
            }

            db.Products.Remove(product);
            db.SaveChanges();

            return Ok(product);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="product"></param>
        /// <returns></returns>
        private static product BuildProduct(productVM product)
        {
            var tags = TagStringBuilder(product);

            product prod = new product
            {
                id = product.id,
                productName = product.productName,
                productCode = product.productCode,
                releaseDate = product.releaseDate,
                price = product.price,
                description = product.description,
                starRating = product.starRating,
                imageUrl = product.imageUrl,
                tags = tags
            };
            return prod;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="product"></param>
        /// <returns></returns>
        private static string TagStringBuilder(productVM product)
        {
            if (product.tags == null || product.tags.Length == 0) return null;
            var i = 0;
            StringBuilder sb = new StringBuilder(product.tags[i]);
            for (i = 1; i < product.tags.Length; i++)
            {
                sb.Append($", {product.tags[i]}");
            }

            return sb.ToString();
        }


        private bool productExists(int id)
        {
            return db.Products.Count(e => e.id == id) > 0;
        }
    }

    public class productVM
    {
        [Key()]
        public int? id { get; set; }
        public string productName { get; set; }
        public string productCode { get; set; }
        public string releaseDate { get; set; }
        public double? price { get; set; }
        public string description { get; set; }
        public double? starRating { get; set; }
        public string imageUrl { get; set; }
        public string[] tags { get; set; }
    }
}