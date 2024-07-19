using Microsoft.AspNetCore.Mvc;

namespace Wondermatics_html.Views.ViewComponents
{
    public class HeaderPrimaryViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("~/Views/Shared/_PartialHeaderPrimary.cshtml");
        }
    }
}
