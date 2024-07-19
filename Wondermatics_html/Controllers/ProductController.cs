using Microsoft.AspNetCore.Mvc;

namespace Wondermatics_html.Controllers
{
    public class ProductController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
