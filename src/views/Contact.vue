<template>
        <v-sheet width="800" class="mx-auto">
                <v-form v-model="valid" @submit.prevent>
                        <v-container>
                                <v-row>
                                        <v-col cols="12" md="4">
                                                <v-text-field v-model="firstname" :rules="nameRules" :counter="10"
                                                        label="First name" required></v-text-field>
                                        </v-col>

                                        <v-col cols="12" md="4">
                                                <v-text-field v-model="lastname" :rules="nameRules" :counter="10"
                                                        label="Last name" required></v-text-field>
                                        </v-col>

                                        <v-col cols="12" md="4">
                                                <v-text-field v-model="email" :rules="emailRules" label="E-mail"
                                                        required></v-text-field>
                                        </v-col>
                                </v-row>
                        </v-container>
                        <v-btn type="submit" block class="mt-2">Submit</v-btn>
                </v-form>
        </v-sheet>
</template>

<script lang="ts">
export default {
        data: () => ({
                valid: false,
                firstname: '',
                lastname: '',
                nameRules: [
(                        value: any) => {
                                if (value) return true

                                return 'Name is requred.'
                        },
(                        value: string | any[]) => {
                                if (value?.length <= 10) return true

                                return 'Name must be less than 10 characters.'
                        },
                ],
                email: '',
                emailRules: [
(                        value: any) => {
                                if (value) return true

                                return 'E-mail is requred.'
                        },
(                        value: string) => {
                                if (/.+@.+\..+/.test(value)) return true

                                return 'E-mail must be valid.'
                        },
                ],
        }),
}
</script>
