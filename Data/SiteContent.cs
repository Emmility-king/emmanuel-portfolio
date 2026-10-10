namespace EmmanuelPortfolio.Data;

public sealed record PortfolioSection(string Href, string Title, string Description);

public static class SiteContent
{
    public const string Name = "Emmanuel Olafisoye";
    public const string Role = "Full Stack Engineer";
    public const string Description =
        "Portfolio of Emmanuel Olafisoye, a full stack engineer building scalable web and mobile products.";

    public static IReadOnlyList<PortfolioSection> Sections { get; } =
    [
        new("/about", "About", "How I think, work, and build."),
        new("/experience", "Experience", "A timeline of roles and impact."),
        new("/skills", "Skills", "Tools I use to ship reliable products."),
        new("/projects", "Projects", "Products and ideas brought to life."),
        new("/education", "Education", "Education, training, and community leadership."),
        new("/contact", "Contact", "Start a conversation or collaboration.")
    ];

    public static string Ordinal(int number) => number.ToString("D2");

    public static string SectionNumber(string href)
    {
        var index = -1;
        for (var i = 0; i < Sections.Count; i++)
        {
            if (Sections[i].Href == href)
            {
                index = i;
                break;
            }
        }

        return Ordinal(index + 1);
    }
}
