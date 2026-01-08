import { defineCollection, z } from "astro:content";

const collection = defineCollection({
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      title: z.string(),
      description: z.string(),
      date: z.string(),
      tags: z.string().array(),
      difficulty: z.union([
        z.literal("Easy"),
        z.literal("Medium"),
        z.literal("Hard"),
      ]),
      draft: z.boolean(),
      /* imageUrl: image().refine((img) => img.width >= 600, {
        message: "Image must be at least 600 px width.",
      }), */
    }),
});

export const collections = {
  articles: collection,
};

/* 
layout: ../../layout/MarkdownLayout.astro
id:
title:
description:
date:
tags:
difficulty:
draft: false
*/
