using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace app.Models
{
    public class Post
    {
        [Key]
        public string PostId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }

        public string BlogId { get; set; }
        [ForeignKey("BlogId")]
        [JsonIgnore]
        public Blog Blog { get; set; }
    }
}