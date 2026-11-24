---
id: eel-v3-ch02-intersection-challenge
chapter: 2
part: "I — Frame the Work"
title: "Setting Up the Intersection Workshop"
status: draft
publication: published
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — fictional teaching case, not a qualified controller"
---

<span id="introducing-the-engineering-challenge"></span>

# Setting Up the Intersection Workshop

Imagine joining a city workshop about a busy four-way intersection. Drivers describe queues that build when cars arrive in bursts. Someone who walks there every day asks whether clearing those queues faster would make the street harder to cross. What would you want to learn before changing the signals?

<figure class="intersection-overview">

![Three cars queue on the near approach to a four-way intersection. A pedestrian crosses the street on the left while others wait at the curb beside traffic lights.](../../illustrations/four-way-intersection.jpg)

<figcaption>If the lead car turns left, its driver and the person on the crosswalk need to know whose turn it is to move.</figcaption>
</figure>

<span id="how-the-example-develops-through-the-course"></span>This fictional intersection is our shared case for the course. We will return to it as the work moves from a first model to deciding what evidence the city would need before making a change at the roadside.

> **Explore further**
>
> The [intersection scope](../../REFERENCE-INTERSECTION.md#the-shared-engineering-question) sets out the city's question and the people, movements and equipment it concerns. The [teaching sources](../../case-study/README.md) let you inspect the invented arrival patterns and follow the vehicle counts recorded at each model step.

## Start with engineering intent

<span id="start-with-outcomes-not-a-favored-solution"></span>The city's **engineering intent** is to improve traffic flow while protecting people crossing the road. A different signal sequence, new detectors and adaptive control are all possible ways to pursue that intent. To understand what a change would have to achieve, listen to the questions around the table.

| Who is at the workshop? | What do they need to know? |
| --- | --- |
| Drivers | How many cars are still waiting after a green light? |
| Pedestrians | When can I start across, and could a turning car cross my path? |
| Operators | How can we keep the intersection usable while a change is in progress? |
| Maintainers | If a signal looks wrong, can we tell what the controller requested and what the lamp actually showed? |

> **Concept**
>
> For drivers, reducing queues is the **intent**. Their **question** is how many cars are still waiting after a burst has had a chance to clear. A future **requirement** could call for fewer vehicles left waiting than under an agreed reference sequence, given the same arrivals and counting period. The city would need to agree on representative conditions and a separate criterion for people crossing.

## A prototype for the first question

<span id="the-first-learning-question"></span>The drivers' accounts suggest a hypothesis about *when* cars arrive. Imagine that two patterns bring the same number of vehicles to each road over the same period. If the signals follow the same sequence, could the timing of the arrivals alone change how many vehicles are still waiting at the end?

<span id="establish-a-whole-system-boundary"></span>We can explore that question with a prototype small enough to follow on paper. Give north–south traffic one queue and east–west traffic another. Start both empty. At each model step, invented arrivals join their queue and the fixed signal phase determines whether one vehicle can leave. Record how many are still waiting after each step.

<span id="two-kinds-of-work-follow-from-the-same-question"></span>An engineer who rarely writes simulations can describe those rules to an AI assistant and ask for a runnable draft. Following one vehicle through a step by hand gives the engineer a way to check the draft and correct a mistaken assumption. Keeping the rules and inputs together lets a colleague move a burst and run the comparison again. If the final count hides a queue that formed and cleared earlier, they can go back to the count for each step.

<span id="what-the-example-willand-will-notprove"></span>That prototype covers vehicle arrivals, signal phases and queues. On the street, the controller, its electrical connections and the signal heads must work together to show people when they may move. Can someone reach the far curb before a turning car is allowed across the same path? To investigate that, the team needs the crossing distance, the indications people actually see and observations of how people use the crossing.

<!-- interactive: chapter-quiz -->

## Choosing the first increment

<span id="the-next-decision"></span><span id="from-the-first-question-to-the-next-experiment"></span>The team could spend its first increment comparing arrival patterns or mapping where turning vehicles and pedestrians share a path. Which uncertainty matters more to the city's next decision? Carry your choice into [Chapter 3, Planning Under Uncertainty](03-planning-under-uncertainty.md).
