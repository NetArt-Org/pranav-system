'use client';
import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "qwAL68jNMRSXDRg7uNbLhN",  // ID of a project you are using
      token: "SGACFVTvnQWM8peFrV2jyvHXiBkngQ7JS2Pf5M6ZoNKV9mJzNWEXtYAPxGfQRrf3G8aI9dmayh7BL011XRw"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})