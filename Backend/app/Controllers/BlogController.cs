using System.Linq;
using app.Models;
using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;

namespace app.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BlogController : ControllerBase
    {
        private DataContext _context;
        public BlogController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult GetBlogs()
        {
            return Ok(_context.Blogs.ToList());
        }

        [HttpPost]
        public ActionResult Post(Blog blog)
        {
            _context.Add(blog);
            _context.SaveChanges();
            return Ok(new { Consumes = "application/json", Blog = blog });
        }

        [HttpGet("{blogId}")]
        public IActionResult Get(string blogId)
        {
            var blog = _context.Find<Blog>(blogId);
            return Ok(blog);
        }

        [HttpDelete("{blogId}")]
        public IActionResult Delete(string blogId)
        {
            var blog = _context.Find<Blog>(blogId);
            if (blog == null)
            {
                return NotFound();
            }

            _context.Blogs.Remove(blog);
            _context.SaveChanges();

            return Ok(blog);
        }
    }
}