using Microsoft.AspNetCore.Mvc;

namespace Wondermatics_html.Controllers
{

    public class AboutController : Controller
    {
        
        public IActionResult Index()
        {
            return View();
        }
    }
}
