using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace app.Models
{
    public class Blog
    {
        [Key]
        public string BlogId { get; set; }
        public string Url { get; set; }

        [JsonIgnore]
        public List<Post> Posts { get; set; }
    }
}