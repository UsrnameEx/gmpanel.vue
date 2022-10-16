<template>
	<BasicView></BasicView>
</template>
<script setup>
import BasicView from '@/views/BasicView';
import {useGetApp} from "@/hooks/useGetApp";

useGetApp();
</script>
