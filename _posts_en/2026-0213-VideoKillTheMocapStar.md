---
layout: post
title: Video Kill the Mocap System?
date: 2026-02-14 14:00:16
description: Thoughts about Video-to-motion
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
[Korean Version]()

As with most posts on my blog, this one is also somewhat unstructured. It may not resonate with everyone.

Today, I’m going to boldly share some thoughts about Video to Motion. Many people are already working in this area, so I feel a bit cautious, but I’ll begin anyway.

As mentioned in my previous post, we once tried exploring this direction at the company, and I had the chance to talk with many animators about it. It has been quite some time since the project was discontinued, and I will filter out any confidential details, so I think it is fine to share a few ideas.

## Preliminary

Hmm… it has been a while since I last followed up on this topic, and honestly, the last time I seriously looked into it was around SIGGRAPH Asia 2024 with [GVHMMR](https://zju3dv.github.io/gvhmr/) and CVPR 2025 with [MVLIFT](https://lijiaman.github.io/projects/mvlift/). If some of the issues I discuss below have already been solved by other work, please just read this as a thought dump.

## Can Video Kill the Mocap System?
When doing motion research, one thing becomes clear very quickly: the available datasets are extremely limited. Except for a few companies, there are not many publicly released datasets. It is a bit unfortunate, but VFX companies, game studios, and AI companies rarely release their in-house motion capture data. Most company datasets are much higher quality than those available in academia, and if they were released, they would be tremendously helpful to researchers.

That said, I cannot blame them. In many ways, it is understandable. During gesture research, I spent about a year working on mocap scenario design and directing, and at first I even acted myself because we could not find actors.

To obtain high-quality optical mocap data, you need a large studio equipped with dozens of specialized cameras, and professional action actors must be hired. Shooting scenarios must be carefully prepared, and many NG takes occur during recording. Even after a full day of shooting, only a limited number of usable takes remain. After filming, experts must spend several days to over a week cleaning up the data. It requires both significant manpower and cost. Since actor selection, directing, and scenario design all reflect company know-how, it is understandable that companies hesitate to release such data.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/img/mocap.png" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    If you wear a tight motion-capture suit like this and film all day, even the actor gets exhausted, so long shoots aren’t really possible. Of course, I have ** no idea who the person**  in the photo is but he does look kind of handsome.
</div>

Many public datasets come from universities like CMU and SFU. In some cases, students act instead of professional performers, and cleanup is done by students or part-time engineers rather than specialists. Looking at CMU data, one can sometimes find broken leg motion or quality issues. Even so, considering the cost and effort required to operate a mocap studio, the fact that such datasets are publicly available is something to be grateful for.

Naturally, this leads to interest in cheaper motion data sources. The simplest idea is to extract motion from video. Considering the amount of accessible video data, this is a very appealing direction. Humans can imitate motion by watching videos, so perhaps models or optimization methods could also extract motion from video.

This leads to a question: if motion can be extracted from video, will optical mocap eventually disappear? I borrowed inspiration from The Buggles’ song [Video Kill the Radio Star](https://www.youtube.com/watch?v=W8r-tXRLazs) when naming this section.

Can Video Kill the Mocap System?

## Actually, video is a good source of motion
In fact, video is already widely used by animators as motion reference material. [Tutorials and reference videos](https://www.youtube.com/watch?v=UkWnwHwMapQ) are easy to find online. However, the process is not automated. Animators project video, create key poses or blocking poses manually, and adjust animation curves.

When we interviewed animators at the company, many said they rely on video references. Then why are video-to-motion research results or tools not widely used in production? The answer is quality.

When showing video-to-motion outputs to animators, they often said that physical characteristics of the motion were degraded, and fixing them required almost the same effort as keyframing manually. Reading video-to-motion papers can be surprising. Joint errors have been reduced to centimeter or even millimeter levels, and from benchmark numbers alone it may seem that further improvement is unnecessary. But there is still a large gap between benchmark performance and real usability. Benchmarks often fail to reflect reality.

## Dilema of Datasets
Many problems in this field originate from the dataset dilemma. The motions we want from video often include acrobatic actions or situations difficult to capture with mocap. Ironically, such motions are precisely the hardest to collect as paired video-motion data. Since supervised learning often requires paired data, both quantity and quality become issues.

For example, [Human3.6](http://vision.imar.ro/human3.6m/description.php) contains mostly everyday motions recorded in a controlled environment with a red carpet. [EMDB](https://eth-ait.github.io/emdb/) attempted more diverse scenes, but prioritizes stable and relatively slow motions. Some datasets rely on IMUs, which introduces accuracy trade-offs.

Of course, because I know how hard it is to build these datasets, I always feel grateful for the effort. I always appreciate and respect the work of those who capture such data and share it with academia. This is absolutely not a criticism of their methodology. What they proposed each time was likely the best method, the best dataset, and the best possible approach at that time, and it should be respected. However, we need to look coldly at how our data is constructed to judge why in-the-wild video-to-motion still does not reach usable quality. In the end, current paired video-motion datasets are insufficient in both quantity and quality compared to what we want in practice, and this bounds the quality of research

## When Graphics meets Vision
I enjoy interdisciplinary work, and video-to-motion is a representative example. The field first advanced within computer vision, where researchers were more comfortable handling video inputs. Vision labs led by researchers such as Angjoo Kanazawa made significant progress using purely vision-based approaches. However, vision-only methods often lack motion domain knowledge. I often felt that adding motion-specific knowledge could significantly improve results, though I did not have a concrete idea.

In that sense, the [WHAM](https://wham.is.tue.mpg.de/) paper proposed an interesting direction using motion priors. The idea is to leverage mocap datasets, which are higher quality and larger than video-motion datasets. Mocap joint data is projected to 2D and then lifted back to 3D through learning. While the paper includes many additional ideas, what stood out most was the successful integration of graphics motion data with vision-based reconstruction problems. Combining strengths from both fields should remain an important direction.

## What matters to the quality?
Even with these efforts, this technology has not reached a truly “usable stage” yet. In the end, it is the quality problem that I keep talking about. How can we make animators actually use this? In my experience, several factors need to be solved.

First is foot sliding. Many papers tried to address it as a soft constraint using contact probability and similar techniques, but there is still a lot to improve. Also, distinguishing when the foot should slide versus when it should stick to the ground is another issue. As you can see extremely in this [stunt video](https://www.youtube.com/watch?v=8mRvRbBJOTo), some movements include intentional sliding. Just like there are martial arts movements where you drag your feet, we need to clearly distinguish cases where sliding is correct versus not.

Root motion is also a major issue. Sometimes when you watch video-to-motion demo videos, the motion looks excellent “in the camera frame” (the angle that follows the video). But to actually use it, root motion in the global coordinate system is truly important. This is not just about global translation of the root or the heading angle problem (though those also still have a long way to go). Reconstructing the angle along the camera’s z-axis is an ill-posed problem, and in many cases it affects quality. [GVHMR](https://zju3dv.github.io/gvhmr/) addressed this issue quite effectively, so those interested can take a look.

Another problem is that the nuance of rotational motion gets heavily blurred. Since there is not much data for motions that involve fast spinning, or kicking while pivoting on a foot, reconstructing physically plausible rotation is very difficult. For non-experts like us, it can feel uncanny but it is hard to identify what exactly is wrong. With help from animators, we found that the physical aspects of rotational motion were often very unnatural.

There is also an out-of-distribution data issue. High-quality motion data is relatively small in quantity, and paired video-motion data is even smaller. Also, because of the issues mentioned above, it is very hard to obtain samples outside the dataset, which makes training difficult. I was fortunate to once talk this issue personally with Professor Karen Liu around two years ago, and later her paper  [Lifting Motion to the 3D World via 2D Diffusion](https://lijiaman.github.io/projects/mvlift/) showed an unexpectedly amazing idea.

A related problem is the trade-off where smoothing motion kills motion detail, while preserving detail can produce jittery motion. Finally, it is also an issue that video data is usually 30 fps. As Daniel Holden said, motion needs at least 60 Hz to see even the minimum level of detail. From a quality standpoint, 30 fps is fatal.

These were issues I had been thinking about on my own for a while. I even considered unpacking them into a paper, but these days I do not have the bandwidth because I am focusing on other research. Still, I am writing this because if someone solves these problems, I will likely be able to use the results as well.

## Closing Thoughts
Video kill the mocap system? My answer in my heart is, “Not yet, and no in the future as well.” No matter how much video-to-motion advances, the merit of high-quality optical mocap data will always remain. However, I strongly believe that someday video-to-motion can become an alternative worth seriously considering. I do not think it functions as a real alternative for obtaining motion sources yet, but I think research is getting quite close.

If someone wants to do research based on the ideas I wrote above, I am always open. We can work together, or not. Even if someone just gets inspired by this blog and produces good results, I would still be very happy. And if I learn about such research later, I think I would feel quite proud.

#### Reference
Let's talk about animation Quality: https://theorangeduck.com/page/animation-quality