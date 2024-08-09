using Microsoft.AspNetCore.Mvc;

namespace Wondermatics_html.Views.ViewComponents
{
    public class FooterPrimaryEngViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View("~/Views/Shared/_PartialFooterPrimaryEng.cshtml");
        }
    }
}
