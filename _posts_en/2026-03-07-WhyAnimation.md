---
layout: post
title: Animation in a robotics era
date: 2026-03-07 14:00:16
description: Why animation, of all things, in a robotics era?
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
[Korean Version](https://pulsekim.github.io/blog_kr/2026/WhyAnimation)

These days, no matter which media outlet you turn to, you see stories about robots. A robot doing a backflip is no longer surprising. A few weeks ago, however, a demo from the Chinese company Unitree was genuinely impressive. I watched a video where multiple G1 robots performed [martial arts alongside a human](https://www.youtube.com/watch?v=Ykiuz1ZdGBc), and I have to admit I was quite surprised. To be honest, I already had a rough idea of the technologies involved from a few sources. Still, seeing that many robots performing acrobatic movements simultaneously was striking.

Research is the same. An enormous number of papers are being published. If I exaggerate a little, it feels like a torrent of research has been rushing in over the past two years. Many researchers probably feel the same way. Robotics is currently the hottest topic, and an enormous amount of attention is focused on how to make robots move.

Yet even in the middle of all this, I am still calmly holding on to animation. My research is very close to robotics, and I plan to expand further into robotics in the near future. At the same time, I always say that my roots are in character animation. In a sense, I am trying to hold robotics in one hand while not letting go of animation with the other. I still do not want to give up the title of “animation researcher.”

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/best.webp" class="img-fluid rounded z-depth-1"  zoomable=true %}
    </div>
</div>
<div class="caption">
    I love Animation
</div>

I will not deny that I might have a bit of a contrarian streak. But I am not holding on to animation simply to look different or to appear cool. There are two reasons I continue to stay connected to animation. First, animation itself is a fascinating research topic and can contribute to society in ways that are different from robotics. Second, when navigating the powerful current of robotics research, animation feels like the rudder of my ship.

In this post, I want to talk a little about the second reason. I would like to share how a perspective rooted in animation research can offer certain advantages when looking at problems in robotics.

## Each field's perspective
I have been fortunate to interact with researchers from a variety of fields while doing research. In addition to people from computer graphics, I have also had many conversations with researchers trained in robotics. Of course, this is a very small sample compared to the entire research community, but based on my personal experience I felt there is a noticeable difference in perspective between the two fields. **This is purely my personal impression, so it should not be generalized. It is simply how things looked from my point of view.**

When I talk with people who originally came from robotics, I often feel that their thinking is strongly rooted in real-world constraints. Since they have worked with real hardware, they tend to value stable setups as much as possible before moving to real experiments. They carefully consider gear ratios so that the robot’s movement does not strain the hardware, and they want the robot to operate reliably in almost any situation. Many of them have probably experienced hardware breaking in the middle of experiments or encountered strange and unpredictable hardware failures. When a robot breaks, they often have to fix it by hand and continue the experiment. Because of these experiences, they seem to prioritize safe and stable configurations already at the design stage. As anyone working with robots eventually learns, [reality hits you hard bro](https://www.youtube.com/watch?v=FCSBoOcGFFE).

In contrast, the graphics researchers I have met often feel closer to a group driven by imagination. They tend to want motions that are more expressive and more daring. Instead of favoring movements that are tense and conservative for the sake of stability, they prefer motions that are natural and fluid. Because of this mindset, they sometimes run experiments in simulation that would be difficult to attempt on real hardware. Settings that might break a robot in the real world can be explored freely in simulation. The philosophy is often to push imagination first and worry about stabilizing the motion later when transferring it to the real world. The advantage of this approach is that it allows people to imagine and create truly interesting motions. The downside is that it can be uncertain whether those ideas will actually work in reality, and sometimes they may even lead to dangerous experiments.

This difference is something researchers working on robots under graphics advisors often notice quite clearly. When I talk with such researchers, I sometimes hear them say that their graphics colleagues do not fully realize how easily real hardware can break, or how difficult it can be to debug issues once a robot fails. I strongly relate to those comments because my first paper was also in robotics, and I experienced similar frustrations.

Ironically, I think this difference is exactly why character animation can play an important role. Someone needs to imagine bold possibilities, and someone else needs to think about practical constraints. Progress happens somewhere in between. If we can first create impressive motions in simulation and then successfully bring them into the real world, the result can be research that truly surprises people.

## Mimic from nature
Animation providing insight for robotics research is perhaps best illustrated by many of the robot technologies we see today. Capabilities such as robots dancing, performing martial arts, or doing tumbling motions are heavily influenced by the paper [Deep Mimic](https://xbpeng.github.io/projects/DeepMimic/index.html) proposed by my advisor [Jason Peng](https://xbpeng.github.io/). Before that work, much of the research focused on formulating and solving problems such as how to make a robot walk stably and maintain contact with the ground. Today, however, a widely used approach is to train robots to imitate human motion data so that they can generate more natural movements.

When this paper first appeared about eight years ago, it was closer to something that worked only in simulation. Since then, hardware has advanced significantly, and many techniques have been developed to transfer simulation results to the real world more reliably. As a result, we can now actually watch humanoid robots perform tumbling motions, walk in a human-like manner, and even execute martial arts movements.

In animation research, there have long been efforts to generate movements that naturally occur in the real world. For example, researchers have captured a pianist’s movements to generate [piano-playing motions](https://for-elise.github.io/). Other work studies how characters can [behave naturally in everyday situations](https://research.nvidia.com/labs/toronto-ai/tesmo/), or how characters can produce [natural conversational gestures](https://www.youtube.com/watch?v=yVvaonY_F1I) while interacting with people. One can easily imagine how interesting it would be if such techniques were applied to humanoid robots.

This perspective is not limited to humanoid robots. Even if robots with entirely different morphologies are developed, these ideas could help design movements that feel natural and useful. For instance, one can imagine how a robot inspired by [marine animals such as an octopus](https://mrl.snu.ac.kr/publications/ProjectSoftCon/SoftCon.html) might move. Even if we create a strange [chimera-like character](https://mrl.snu.ac.kr/research/ProjectChimera/Chimera.html) for functional purposes, it should still be possible to design and apply motions that are natural for that body.

## What's next?
At a time when robots can already perform tumbling motions, what else can we explore next? I do have a few ideas, but since I still have my own research to do, I cannot lay everything out here. I am still a PhD student, so I should probably focus on doing my own research well.

That said, one challenge at a high level is still closing the gap between simulation and the real world. Of course, robots can already tumble and perform martial arts. But what I mean is moving toward motions that are **more natural and more stable**. Ultimately, I believe the goal is to make robots gradually resemble humans in the way they move.

Current robots sometimes rely on large amounts of force to recover from unstable situations, or they mix in tricks that humans would never use in order to maintain balance. Instead, we should aim for movements that resemble human behavior more closely and naturally.

Gestures are a good example of this challenge. Natural gestures often involve many contacts, such as touching the chin or crossing the arms. However, these motions are quite tricky. If handled poorly, they can cause self-collisions that may damage the robot. On the other hand, if we avoid contact entirely in order to keep the system safe, the resulting motions can look awkward. A hand might move toward the chin and stop halfway, or arms might cross in an unnatural way.

In the end, what matters is producing motion that does not rely on excessive force and instead looks smooth and natural. Only then can robot movements appear natural to people and support meaningful interaction with humans.

## End thoughts
Recently I heard something interesting from someone working at a well-known robotics research company. Many companies are looking for people who understand both robotics and animation, but the pool of such researchers is still quite small. As a result, there is strong demand for people with experience in both areas. Of course, working in both fields is not easy. Each field alone already requires a great deal of effort and depth. Still, precisely because it is difficult, there will likely be many places that value people with that kind of background.

We should be realists who still allow ourselves to dream. In my case, the dream is animation, and the reality is robotics. When these two are combined in the right balance, the results always feel exciting to me.

#### Reference
* Ohta Kuniyoshi: https://i.namu.wiki/i/89XmKfX1ypexrLmnVVUUtz4bGLSwxbNh7fxdnIL9K896ljMmViMCOi4BnrWIo_d2k6vrZkB2jDEaFuMksyrLow.webp
* Unitree Gala: https://www.youtube.com/watch?v=Ykiuz1ZdGBc
* Reality hits you hard bro: https://www.youtube.com/watch?v=FCSBoOcGFFE 
* DeepMimic: https://xbpeng.github.io/projects/DeepMimic/index.html
* FurElise: https://for-elise.github.io/
* Tesmo: https://research.nvidia.com/labs/toronto-ai/tesmo/
* BodyGesture: https://www.youtube.com/watch?v=yVvaonY_F1I 
* SoftCon: https://mrl.snu.ac.kr/publications/ProjectSoftCon/SoftCon.html 