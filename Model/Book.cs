using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BookListRazor.Model
{
    public class Book
    {
        //key maps to Id
        [Key]
        public int Id { get; set; }

        //Required maps to Name to make it a required field
        [Required]
        public string Name { get; set; }
        public string Author { get; set; }
    }
}
