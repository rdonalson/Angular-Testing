using System.ComponentModel.DataAnnotations;
using System.Web.Http.Cors;

namespace Angular_Testing.Data
{
    [EnableCors(origins: "http://localhost:5000", headers: "*", methods: "*")]
    public class tag
    {
        [Key]
        public int? id { get; set; }
        public int? productId { get; set; }
        public string name { get; set; }
    }
}
