using System.Linq;
using app.Models;
using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;

namespace app.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PostController : ControllerBase
    {
        private DataContext _context;
        public PostController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult GetPosts()
        {
            return Ok(_context.Posts.ToList());
        }

        [HttpPost]
        public ActionResult Post(Post post)
        {
            _context.Add(post);
            _context.SaveChanges();
            return Ok(new { Consumes = "application/json", Post = post });
        }

        [HttpGet("{postId}")]
        public IActionResult Get(string postId)
        {
            var post = _context.Find<Post>(postId);
            return Ok(post);
        }

        [HttpDelete("{postId}")]
        public IActionResult Delete(string postId)
        {
            var post = _context.Find<Post>(postId);
            if (post == null)
            {
                return NotFound();
            }

            _context.Posts.Remove(post);
            _context.SaveChanges();

            return Ok(post);
        }
    }
}