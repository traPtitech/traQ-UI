<template lang="pug">
div.links-list-wrap
  ul.links-list
    li
      a(href="https://portal.trap.jp" target="_blank")
        div.link-icon.flex-center
          IconTraPortal(size="20")
        p.link-title
          | Portal
    li
      a(href="https://trap.jp" target="_blank")
        div.link-icon.flex-center
          IconLogotraP(size="20")
        p.link-title
          | Official Website
    li
      a(href="https://wiki.trap.jp" target="_blank")
        div.link-icon.flex-center
          IconLogoGrowi(size="20")
        p.link-title
          | Wiki
    li
      a(href="https://blog-admin.trap.jp" target="_blank")
        div.link-icon.flex-center
          IconLogoGhost(size="20")
        p.link-title
          | Blog
    li
      a(href="https://drive.trap.jp" target="_blank")
        div.link-icon.flex-center
          IconLogoNextCloud(size="26")
        p.link-title
          | Drive
    li
      a(href="https://git.trap.jp" target="_blank")
        div.link-icon.flex-center
          IconLogoGitea(size="24")
        p.link-title
          | Git
    li
      a(href="https://showcase.trapti.tech" target="_blank")
        div.link-icon.flex-center
          IconLogoShowcase(size="20")
        p.link-title
          | Showcase
    li
      a(href="https://md.trap.jp" target="_blank")
        div.link-icon.flex-center
          IconLogoHackMD(size="20")
        p.link-title
          | HackMD
    li
      a(href="https://anke-to.trap.jp" target="_blank")
        div.link-icon.flex-center
          IconLogoAnketo(size="20")
        p.link-title
          | anke-to
    li
      a(href="https://booq.trap.jp" target="_blank")
        div.link-icon.flex-center
          IconLogoBooQ(size="20")
        p.link-title
          | booQ
    li
      a(href="https://bot-console.trap.jp" target="_blank")
        div.link-icon.flex-center
          IconLogoBotConsole(size="20")
        p.link-title
          | BOT Console
</template>

<script>
import IconLogoGhost from '@/components/Icon/IconLogoGhost'
import IconLogoGitea from '@/components/Icon/IconLogoGitea'
import IconLogoGrowi from '@/components/Icon/IconLogoGrowi'
import IconLogoHackMD from '@/components/Icon/IconLogoHackMD'
import IconLogoNextCloud from '@/components/Icon/IconLogoNextCloud'
import IconLogoShowcase from '@/components/Icon/IconLogoShowcase'
import IconLogotraP from '@/components/Icon/IconLogotraP'
import IconLogoAnketo from '@/components/Icon/IconLogoAnketo'
import IconLogoBooQ from '@/components/Icon/IconLogoBooQ'
import IconLogoBotConsole from '@/components/Icon/IconLogoBotConsole'
import IconTraPortal from '@/components/Icon/IcontraPortal'

export default {
  name: 'LinkList',
  components: {
    IconLogoGhost,
    IconLogoGitea,
    IconLogoGrowi,
    IconLogoHackMD,
    IconLogoNextCloud,
    IconLogoShowcase,
    IconLogotraP,
    IconLogoBooQ,
    IconLogoAnketo,
    IconLogoBotConsole,
    IconTraPortal
  }
}
</script>

<style lang="sass">
.links-list-wrap
  padding: 0 0 15px

.links-list
  padding-top: 15px

  a
    display: flex
    align-items: center
    color: $text-light-color
    padding: 5px 10px 5px 20px
    &:hover
      background-color: rgba(0,0,0,0.1)

.link-icon
  font-size: 1.5em
  width: 30px
  height: 30px

.link-title
  margin: 5px 0 5px 10px
  font-size: 1em
  user-select: none
</style>
