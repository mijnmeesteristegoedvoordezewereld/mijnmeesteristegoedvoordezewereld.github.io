import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    heroEyebrow: z.string().optional(),
    heroTitleLine1: z.string().optional(),
    heroTitleEm: z.string().optional(),
    heroTitleLine2: z.string().optional(),
    heroTitleLine3: z.string().optional(),
    heroIntro: z.string().optional(),
    primaryCta: z.string().optional(),
    secondaryCta: z.string().optional(),
    secondCtaLabel: z.string().optional(),
    statementEyebrow: z.string().optional(),
    statementIntro: z.string().optional(),
    statementHighlight: z.string().optional(),
    statementSuffix: z.string().optional(),
    statementText: z.string().optional(),
    talents: z.array(
      z.object({
        number: z.string(),
        title: z.string(),
        text: z.string(),
        color: z.string(),
      })
    ).optional(),
    closingEyebrow: z.string().optional(),
    closingTitle: z.string().optional(),
    closingEm: z.string().optional(),
    closingText: z.string().optional(),
    footerText: z.string().optional(),
    headline: z.string().optional(),
    message: z.string().optional(),
    buttonText: z.string().optional(),
    backLink: z.string().optional(),
  }),
});

export const collections = { pages };
