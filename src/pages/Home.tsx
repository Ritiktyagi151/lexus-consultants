import { Reveal } from "../components/motion";
import {
  Hero, IndustriesMarquee, About, Services, Process, Presence, FAQ, CTA,
} from "../components/Sections";
import { OfficeMedia } from "../components/home/OfficeMedia";

export function Home() {
  return (
    <>
      <Reveal><Hero /></Reveal>
      <Reveal><IndustriesMarquee /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><OfficeMedia /></Reveal>
      <Reveal><Services /></Reveal>
      <Reveal><Process /></Reveal>
      <Reveal><Presence /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Reveal><CTA /></Reveal>
    </>
  );
}
