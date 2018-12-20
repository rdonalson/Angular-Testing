using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using Angular_Testing.Data;

namespace Angular_Testing.Controllers
{
    [EnableCors(origins: "http://localhost:5000", headers: "*", methods: "*")]
    public class TagsController : ApiController
    {
        private ProductContext db = new ProductContext();

        // GET: api/Tags
        public IQueryable<tag> GetTags()
        {
            return db.Tags;
        }

        // GET: api/Tags/5
        [ResponseType(typeof(tag))]
        public IHttpActionResult Gettag(int id)
        {
            tag tag = db.Tags.Find(id);
            if (tag == null)
            {
                return NotFound();
            }

            return Ok(tag);
        }

        // PUT: api/Tags/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Puttag(int id, tag tag)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tag.id)
            {
                return BadRequest();
            }

            db.Entry(tag).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!tagExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Tags
        [ResponseType(typeof(tag))]
        public IHttpActionResult Posttag(tag tag)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Tags.Add(tag);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tag.id }, tag);
        }

        // DELETE: api/Tags/5
        [ResponseType(typeof(tag))]
        public IHttpActionResult Deletetag(int id)
        {
            tag tag = db.Tags.Find(id);
            if (tag == null)
            {
                return NotFound();
            }

            db.Tags.Remove(tag);
            db.SaveChanges();

            return Ok(tag);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tagExists(int id)
        {
            return db.Tags.Count(e => e.id == id) > 0;
        }
    }
}