using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Angular_Testing.Data
{
    public class product
    {
        //public product()
        //{
        //    // tags = new HashSet<tag>();
        //}

        [Key()]
        public int? id { get; set; }
        public string productName { get; set; }
        public string productCode { get; set; }
        public string releaseDate { get; set; }
        public double? price { get; set; }
        public string description { get; set; }
        public double? starRating { get; set; }
        public string imageUrl { get; set; }
        public string tags { get; set; }

        // public virtual ICollection<tag> tags { get; set; }
    }
}
