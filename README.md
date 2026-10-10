# Emmanuel Olafisoye — Portfolio

Personal portfolio for Emmanuel Olafisoye, built as a standalone Blazor WebAssembly app for static hosting.

## Requirements

- .NET 8 SDK

## Run locally

```powershell
dotnet run
```

## Publish for static hosting

```powershell
dotnet publish EmmanuelPortfolio.csproj -c Release -o publish
```

Deploy the contents of `publish/wwwroot`. The Vercel configuration in `vercel.json` builds the app and rewrites route requests to the Blazor entry point. For Netlify, the included `wwwroot/_redirects` provides the equivalent route fallback.

The site uses locally bundled Geist fonts and skill logos from Simple Icons (CC0).

## Project structure

```
Components/
  RouteHeader.razor    Shared section-page header
Data/
  SiteContent.cs       Site identity, navigation sections, and numbering
Layout/
  MainLayout.razor     Shared Blazor layout
  NavMenu.razor        Responsive home-page navigation
Pages/
  Home.razor           Home page and portfolio directory
  About.razor
  Contact.razor
  Education.razor
  Experience.razor
  Projects.razor
  Skills.razor
  NotFound.razor
wwwroot/
  css/site.css         Site styles and responsive breakpoints
  me.jpg               Home-page portrait
```
