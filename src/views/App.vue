<template>
  <ais-instant-search index-name="classes" :search-client="searchClient">
    <div class="left-panel">
      <ais-clear-refinements>
        <span slot="resetLabel">Clear</span>
      </ais-clear-refinements>
      <h2>Brands</h2>
      <ais-refinement-list attribute="name" searchable />
      <ais-configure :hitsPerPage="8" />
    </div>
    <div class="right-panel">
      <ais-search-box />
      <ais-hits>
        <div slot="item" slot-scope="{ item }">
          <h2>{{ item.name }}</h2>

          <img
            :src="item.pictureSources"
            align="left"
            :alt="item.name"
            width="200"
            height="190"
            class="class-image"
          />

          <div class="hit-description">
            <ais-highlight
              attribute="description"
              :hit="item.description"
            ></ais-highlight>
          </div>
          <div class="hit-description">{{ item.description }}</div>
        </div>
      </ais-hits>
      <ais-pagination />
    </div>
  </ais-instant-search>
</template>

<script>
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/algolia-min.css";

export default {
  data() {
    return {
      searchClient: algoliasearch(
        //"B1G2GM9NG0",
        "MIG150ZYJX",
        //"aadef574be1f9252bb48d4ea09b5cfe5"
        "d18e0d7563d406863fb469d00796266e"
      ),
    };
  },
};
</script>

<style>
body {
  font-family: sans-serif;
  padding: 1em;
}

.ais-Hits-list {
  margin-top: 0;
  margin-bottom: 1em;
}

.ais-InstantSearch {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 1em;
}

.ais-Hits-item img {
  margin-right: 1em;
}
.hit-name {
  margin-bottom: 0.5em;
}
.hit-description {
  color: #888;
  font-size: 0.8em;
  margin-bottom: 0.5em;
}
</style>
