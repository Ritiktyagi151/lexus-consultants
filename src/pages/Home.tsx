import { Reveal } from "../components/motion";
import {
  Hero, IndustriesMarquee, About, Services, Process, Presence, FAQ, CTA,
} from "../components/Sections";

export function Home() {
  return (
    <>
      <Reveal><Hero /></Reveal>
      <Reveal><IndustriesMarquee /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><Services /></Reveal>
      <Reveal><Process /></Reveal>
      <Reveal><Presence /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Reveal><CTA /></Reveal>
    </>
  );
}
