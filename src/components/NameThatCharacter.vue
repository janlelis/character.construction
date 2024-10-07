<template>
  <div class="name-that-character">
    <input
      type="text"
      v-model="char"
      @keyup="(event) => updateCharName(event.target.value)"
      class="input-char"
      autofocus
    />

    <Transition name="fade-fast">
      <div v-if="name" class="char-name">{{ name }}</div>
    </Transition>

    <div v-if="!name && !placeholderSeen" class="placeholder">
      Enter any character or Emoji to get its name
    </div>
  </div>
</template>

<script setup>
import { unicodeName } from "unicode-name";
import { ref } from "vue";

const isClient = typeof window !== "undefined";
const path = "/name";
const getParam = "character";

const char = defineModel();
char.value = isClient
  ? new URLSearchParams(window.location.search).get(getParam)
  : undefined;
const name = ref(undefined);
const placeholderSeen = ref(!!char.value);

const assignChar = (newChar, newName, historyMode = false) => {
  char.value = newChar;
  name.value = newName;
  if (isClient) {
    const pathAndQuery = char.value
      ? `${path}?${getParam}=${encodeURIComponent(char.value)}`
      : path;
    if (historyMode === "replace") {
      history.replaceState(null, null, pathAndQuery);
    } else if (
      historyMode !== "nohistory" &&
      `${path}${window.location.search}` !== pathAndQuery
    ) {
      history.pushState(null, null, pathAndQuery);
    }
  }
};

const updateCharName = (updatedChar, historyMode = "push") => {
  if (!updatedChar || updatedChar === "") {
    assignChar("", undefined, historyMode);
    return;
  }

  const chars = [...updatedChar];
  let codepointCount = 11;
  let newName = undefined;
  let newChar = undefined;

  while (!newName && codepointCount-- > 0) {
    newChar = chars.slice(0, codepointCount).join("");
    newName = unicodeName(newChar);
  }
  assignChar(newChar, newName, historyMode);
  placeholderSeen.value = true;
};

updateCharName(char.value, "replace");

if (isClient) {
  window.addEventListener("popstate", (event) => {
    updateCharName(
      new URLSearchParams(window.location.search).get(getParam),
      "nohistory"
    );
  });
}
</script>
