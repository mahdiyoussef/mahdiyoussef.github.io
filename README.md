# Youssef Mahdi · AI & Data Engineer

A static GitHub Pages portfolio with six project case studies, professional outcomes, and project walkthroughs.

## Preview locally

From this folder, run the following command and open [localhost:8125](http://localhost:8125/).

```sh
python3 -m http.server 8125 --bind 127.0.0.1
```

## Publish on GitHub Pages

1. Create a public repository named `mahdiyoussef.github.io` on GitHub. If that repository already exists, review its content before adding these files.
2. Copy the **contents** of this folder to the root of the repository’s `main` branch. Include the `assets` folder and the hidden `.nojekyll` file.
3. Open **Settings → Pages**, select **Deploy from a branch**, choose **main** and **/(root)**, then save.
4. When GitHub reports a successful deployment, visit [mahdiyoussef.github.io](https://mahdiyoussef.github.io/).

The site uses relative links and can also be deployed as a GitHub project site. See the [GitHub Pages publishing guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Edit the content

- `index.html` contains the homepage, selected projects, experience, education, and contact links.
- `architecture.html` contains the six case studies with portable HTML system diagrams. The [Mermaid source](architecture-diagrams.md) also renders directly in GitHub’s Markdown viewer.
- `impact.html` contains the inspection and electric mobility outcomes reported in the CV.
- `demo.html` contains the dashboard and notebook walkthroughs.
- `assets/site.css` and `assets/site.js` contain the styling, project filters, and cover illustrations. The website needs no build step, API keys, or external assets.

The homepage photograph is an AI-generated illustration of an automated visual inspection station. The project covers are illustrative and contain no measured project data. Font attribution is in [FONT-LICENSE.txt](assets/FONT-LICENSE.txt).

### Homepage artwork

[Inspection station image](assets/inspection-station.webp), generated with the built-in image generator.

> Use case: photorealistic-natural. Wide 3:2 editorial photo for an engineer's portfolio. Close-up of an automated visual quality inspection station in a muted olive-gray workshop. A black industrial machine vision camera on a firm vertical bracket points down through a circular diffuse inspection light at a small electric motor stator held in a fixture. The stator is a laminated steel ring with dark copper windings. The camera and fixture are the focal point. Three-quarter angle, realistic brushed-metal textures, calm natural light, graphite and muted copper. No jet engine, turbine, blades, people, text, logos or overlays. Generic illustration.
