---
layout: post
title: Sure, we should talk about animation quality
date: 2026-02-01 23:00:16
description: About motion quality
tags: blog_en, thoughts
categories: blog_en
_styles: |
  #markdown-content {
    line-height: 1.8;
  }
  #markdown-content p {
    margin: 1.1em 0;
  }
---
[Korean Version](https://pulsekim.github.io/blog_kr/2026/MotionQuality/)

This post is, admittedly, a bit of an unorganized stream of thoughts. I want to apologize in advance to anyone who was expecting a neatly structured piece.

People who know me only through my papers, CV, or online presence might assume that my main interest lies in robotics. In reality, I have spent more time researching animation than robotics. Until just before I returned to SFU to start my PhD again, I was working on animation research at NCSOFT (NC AI). I focused in particular on kinematic motion research for real-world animators, a line of work I was involved in until fairly recently.

That is why, when I introduce myself, I usually say that I am a researcher rooted in computer animation who has expanded into physics simulation and robotics. My wife gets annoyed every time I say this. She thinks I should fully ride the wave of robotics, which is a hot field these days, instead of putting character animation, which is arguably more niche, front and center. But it is what it is. At its core, my heart still lies in research grounded in character animation.

## Let’s talk about Animation Quality
Around this time two years ago, one of my favorite researchers, Daniel Holden, published a blog post. If you work in computer animation, it is the kind of post that hits you hard, emotionally even. The title alone, ["Let’s talk about Animation Quality"](https://theorangeduck.com/page/animation-quality), already strikes a chord.

If you are studying animation or planning to extend your research into animation or motion, I strongly recommend reading that post. Rather than summarizing it here, I would much prefer that you read his blog first before continuing.

## Obsession to the Quality
Even before joining NCSOFT, there was already a strong obsession with animation quality at the lab level. That was simply the atmosphere. People regularly debated what made a motion good or bad. After joining NC, however, I realized that the level of quality demanded by artists in a game company was on a completely different scale.

I felt this most strongly when working on gesture-related research. Since Professor Jehee Lee was the principal advisor on the project, the baseline standard for motion quality was already high. The technical artists we collaborated with pushed it even further. They immediately noticed even slight awkwardness in shoulder movement. Their feedback on the feel and subtle details of motion gradually steered the research toward one clear direction, quality. For more details, I will point readers to the paper itself. I plan to write a separate post someday about the behind-the-scenes story of that work. I felt this even more strongly while working on a series of subsequent projects. We started from a simple question. There is a lot of research on video-to-motion and text-to-motion, so why are professional animators not actually using these tools? Fortunately, we were able to collaborate closely with a technical artist, and the conclusion was clear. The issue was insufficient quality. Our goal became clear. We wanted to build animation AI tools that animators would actually want to use. That inevitably meant research focused on raising quality.

It was around that time that I read Daniel Holden’s article and felt deeply moved. Explaining why animation demands such an extreme focus on quality, and how difficult it is to achieve, is incredibly hard. Convincing people outside the field is even harder. We usually fall back on explanations about differences in data characteristics, dataset quality, or dataset size. Rarely do we articulate the problem with the level of depth and clarity that Holden achieved in his writing.

To me, that article felt like a validation of why my research is difficult and why it matters. It is a piece I still carry with me.

## Computer Vision and Computer Animation
Over the past few years, the computer vision field has advanced at an explosive pace. Along the way, some ideas and evaluation methods from vision have been brought into motion research. Thanks to researchers like Chuan Guo, we now see attempts to quantify motion quality using metrics such as FID and diversity. Before that, evaluation in animation research relied heavily on qualitative studies. It was inherently difficult to reduce better animation quality to a single scalar value. Instead, we often decomposed motion into components and compared them individually. I have heard from senior lab members that when a committee included a vision professor, questions about evaluation were almost guaranteed. 

Metrics from vision domain have certainly helped in quantifying quality, and I see them as a positive step toward addressing long-standing issues in our field. That said, I do not think we are at a point where we can rely on them alone. From my conversations with animators at NC, there are many cases where motions that score well according to metrics do not align with what animators consider good motion. My interpretation is that motion auto-encoders themselves are still quite unstable. Even when trained under identical conditions, I have seen drastically different clustering behaviors in latent space. In some runs, running motions cluster nicely while shooting motions are scattered. In others, the opposite happens as training progresses. Temporal information is hard to capture, and depending on which aspects you emphasize, the latent representation can skew heavily in one direction.

In short, building a truly general motion auto-encoder remains extremely challenging. Combined with the relatively small size of motion datasets, these systems become highly sensitive to minor factors. For that reason, I do not think current metrics are as reliable as those commonly used in vision. If we want evaluation metrics that truly reflect animation quality, we need to keep thinking and pushing further rather than settling where we are now. In many vision conferences, the motion demonstrated in papers still falls short of the quality typically seen in graphics venues. As Daniel Holden pointed out, motions with foot sliding, physically implausible behavior, broken temporal consistency, or jittery limbs can still be acceptable as long as the target problem is solved. In contrast, venues like SIGGRAPH maintain a clear quality bar. If a paper does not meet it, reviewers often engage in serious debate. For kinematic motion papers especially, this bar is quite strict. This is not meant as criticism of the vision community. Rather, it is a cautious suggestion. Perhaps we can collectively raise the bar and aim for higher-quality results there as well.

## Closing thoughts
Why does research exist? There are many possible answers, but personally, I believe it exists to influence society in meaningful ways. While doing research, it is easy to become overly focused on benchmark numbers. If evaluation metrics perfectly reflected real-world usefulness, then maximizing those numbers would make complete sense. Most widely used evaluation metrics today are still imperfect. I try to keep that in mind as I move forward with my work. Animation quality is just one facet of that broader concern. I want to keep reminding myself to focus on solving real problems, not problems created solely for the sake of metrics.

#### Reference
Let's talk about animation Quality: https://theorangeduck.com/page/animation-quality