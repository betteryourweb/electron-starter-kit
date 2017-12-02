<template>
    <div class="MusicLibrary">
        <form class="search">
            Search <input name="query" v-model="searchQuery">
        </form>
        <library
                :data="musicFiles"
                :columns="gridColumns"
                :filter-key="searchQuery"
        >
        </library>
    </div>
</template>
<script>
  import Library from '@/components/Library'
  // import fs from 'fs'
  // import _ from 'lodash'
  import path from 'path'
  import {mapMutations, mapGetters} from 'vuex'

  export default {
    components: {
      Library
    },
    name: 'MusicLibrary',
    data () {
      return {
        searchQuery: '',
        gridColumns: ['name', 'path'],
        gridData: [
          { name: 'Chuck Norris', power: Infinity },
          { name: 'Bruce Lee', power: 9000 },
          { name: 'Jackie Chan', power: 7000 },
          { name: 'Jet Li', power: 8000 }
        ],
        filelist: [],
        musicDir: path.resolve(process.env.HOME + '/Music'),
        extensions: [
          '.mp3',
          '.m4a',
          '.ogg',
          '.wav'
        ]
      }
    },
    methods: {
      ...mapMutations({
        getMusic: 'Player/getMusic'
      })
    },
    computed: {
      ...mapGetters('Player', {
        musicFiles: 'getMusicFiles'
      })
    },
    mounted () {
      // this.filelist = this.walk(this.musicDir)
      // console.log({filelist: this.filelist})
      this.getMusic(this.musicDir)
    }
  }
</script>
