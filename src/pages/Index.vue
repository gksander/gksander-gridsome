<template>
  <Layout>
    <!-- Header image/title -->
    <gks-title></gks-title>
    <gks-background></gks-background>
    <gks-experience></gks-experience>
    <gks-tools></gks-tools>
    <gks-projects></gks-projects>
    <gks-education></gks-education>
    <gks-contact></gks-contact>
  </Layout>
</template>

<script>
import GksTitle from "~/components/GksTitle";
import GksExperience from "~/components/GksExperience";
import GksTools from "~/components/GksTools";
import GksProjects from "~/components/GksProjects";
import GksEducation from "~/components/GksEducation";
import GksContact from "~/components/GksContact";
import GksBackground from "../components/GksBackground";

export default {
  components: {
    GksTitle,
    GksBackground,
    GksExperience,
    GksTools,
    GksProjects,
    GksEducation,
    GksContact,
  },

  metaInfo: {
    title: "Grant Sander",
    meta: [{ name: "description", content: "Grant Sander's portfolio site" }],
  },
};
</script>
