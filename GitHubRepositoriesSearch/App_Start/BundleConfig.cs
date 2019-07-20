using System.Web;
using System.Web.Optimization;

namespace GitHubRepositoriesSearch
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/app/js/jquery-{version}.js",
                        "~/app/js/site.js",
                        "~/app/js/angular.js",
                        "~/app/js/angular-route.js",
                        "~/app/js/ui-router.js",
                        "~/app/app.js",
                        "~/app/gitHubRepositories/controllers/gitHubRepositories.controllers.js",
                        "~/app/gitHubRepositories/directives/repositoryItem.directive.js",
                        "~/app/gitHubRepositories/services/gitHub.servics.js"

                        ));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/app/js/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/app/js/bootstrap.js"
                    ));
            //"~/app/js/popper.js"

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/app/Content/bootstrap.css",
                      "~/app/Content/font-awesome.css",
                      "~/app/style/index.css"));
        }
    }
}
