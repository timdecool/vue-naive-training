import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCharacterStore = defineStore('character', () => {

    const characters = ref(
        [
            {
                id: 1,
                name: "Gurdha",
                ascendancy: "Orc",
                path: "Guerrier",
                background: "Enfant des rues",
                flaw: "Paranoïaque",
                stats: {
                    strength: 15,
                    dexterity: 11,
                    constitution: 13,
                    intelligence: 9,
                    wisdom: 12,
                    charisma: 14
                },
                level: 1,
                xp: 0,
                gold: 50,
                inventory: [],
                feats: [
                    {
                        name: "Attaque puissante"
                    }
                ],
                weapon: "Épée longue",
                picture: '/src/assets/portraits/orcfwarrior.jpg'
            },
            {
                id: 2,
                name: "Mirren",
                ascendancy: "Halfelin",
                path: "Prêtre",
                background: "Héros du peuple",
                flaw: "Ne peut s'empêcher d'agir face à une injustice",
                stats: {
                    strength: 15,
                    dexterity: 11,
                    constitution: 13,
                    intelligence: 9,
                    wisdom: 12,
                    charisma: 14
                },
                level: 2,
                xp: 0,
                gold: 50,
                inventory: [],
                feats: [
                    {
                        name: "Attaque puissante"
                    }
                ],
                weapon: "Épée longue",
                picture: '/src/assets/portraits/halflingmcleric.jpg'
            },
            {
                id: 23,
                name: "Nayla",
                ascendancy: "Tieffelin",
                path: "Roublard",
                background: "Érudit",
                flaw: "Vit dans la peur constante de mourir",
                stats: {
                    strength: 15,
                    dexterity: 11,
                    constitution: 13,
                    intelligence: 9,
                    wisdom: 12,
                    charisma: 14
                },
                level: 3,
                xp: 0,
                gold: 50,
                inventory: [],
                feats: [
                    {
                        name: "Attaque puissante"
                    }
                ],
                weapon: "Épée longue",
                picture: '/src/assets/portraits/tieflingfwarrior.jpg'
            }

        ])

        const getAvailableClasses = computed(() => {
            let classes = characters.value.map(({path}) => path)
            return [... new Set(classes)]
        })

        const getLevelRange = computed(() => {
            let levels = characters.value.map(({level}) => level)
            return { max: Math.max(...levels), min: Math.min(...levels) }
        })

    return { characters, getAvailableClasses, getLevelRange }
})
