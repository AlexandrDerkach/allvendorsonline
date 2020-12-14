<template>
    <div>
        <LandingHeader/>
        <LandingContent/>
    </div>
</template>

<script>
import LandingHeader from "./LandingHeader";
import LandingContent from "./LandingContent";
export default {
    name: "LandingPage",
    components: {
        LandingHeader,
        LandingContent
    }
}
</script>

<style scoped>

</style>
