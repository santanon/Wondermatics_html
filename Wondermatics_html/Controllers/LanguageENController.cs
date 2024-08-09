using Microsoft.AspNetCore.Mvc;

namespace Wondermatics_html.Controllers
{
    [Route("en")]
    public class LanguageENController : Controller
    {
        public IActionResult Index()
        {
            return View("~/Views/Home/Eng/Index.cshtml");
        }

        [Route("About")]
        public IActionResult AboutEN()
        {
            return View("~/Views/About/Eng/Index.cshtml");
        }

        [Route("Contact")]
        public IActionResult ContactEN()
        {
            return View("~/Views/Contact/Eng/Index.cshtml");
        }
        [Route("Contact/Formonline")]
        public IActionResult FormonlineEN()
        {
            return View("~/Views/Contact/Eng/Formonline.cshtml");
        }

        [Route("Product")]
        public IActionResult ProductEN()
        {
            return View("~/Views/Product/Eng/Index.cshtml");
        }
        [Route("Product/Camera")]
        public IActionResult CameraEN()
        {
            return View("~/Views/Product/Eng/Camera.cshtml");
        }
    }
}
