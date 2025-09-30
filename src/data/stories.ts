import { Story, Genre, TimePeriod, GenderPreference, AgeGroup, StoryFilters } from '@/types/story'

export const sampleStories: Story[] = [
  {
    id: '1',
    title: 'The Three Little Pigs',
    content: `Once upon a time, there were three little pigs who left their mother's house to seek their fortune in the world.

The first little pig was very lazy. He didn't want to work at all and he built his house out of straw. "There!" he said. "That was easy. Now I can rest."

The second little pig worked a little bit harder but he was somewhat lazy too and he built his house out of sticks. "There!" he said. "That didn't take long. Now I can play."

The third little pig worked hard all day and built his house with bricks. "It takes time and hard work," he said, "but my house will be strong and safe."

Soon, a big bad wolf came along. He knocked on the door of the first little pig's house.

"Little pig, little pig, let me come in!"

"Not by the hair on my chinny chin chin!" replied the first little pig.

"Then I'll huff and I'll puff and I'll blow your house in!"

And he huffed and he puffed and he blew the house in. The first little pig ran as fast as he could to his brother's house made of sticks.

The wolf followed him and knocked on the door of the second house.

"Little pigs, little pigs, let me come in!"

"Not by the hair on our chinny chin chins!" replied the two little pigs.

"Then I'll huff and I'll puff and I'll blow your house in!"

And he huffed and he puffed and he blew the house in. Both little pigs ran as fast as they could to their brother's house made of bricks.

The wolf followed them and knocked on the door of the third house.

"Little pigs, little pigs, let me come in!"

"Not by the hair on our chinny chin chins!" replied the three little pigs.

"Then I'll huff and I'll puff and I'll blow your house in!"

But no matter how hard he huffed and puffed, he could not blow the brick house down.

The wolf tried to climb down the chimney, but the smart third pig had put a pot of boiling water under the chimney. The wolf fell right into it!

"Ouch!" he cried, and he ran away and never bothered the three little pigs again.

The three little pigs lived happily ever after in the strong brick house, and they learned that hard work and planning ahead will keep you safe.`,
    genre: Genre.FAIRY_TALES,
    timePeriod: TimePeriod.MEDIEVAL,
    genderPreference: GenderPreference.NO_PREFERENCE,
    ageGroup: AgeGroup.PRESCHOOL,
    source: 'Traditional Folk Tale',
    estimatedReadingTime: 5,
    hasAudio: true,
    hasVideo: true,
    tags: ['animals', 'hard work', 'safety', 'family', 'building']
  },
  {
    id: '2',
    title: 'David and Goliath',
    content: `Long ago, in the land of Israel, there lived a young shepherd boy named David. He was the youngest of eight brothers and spent his days watching over his father's sheep in the green fields.

One day, David's father asked him to bring food to his older brothers who were soldiers in King Saul's army. The army of Israel was facing a terrible enemy - the Philistines.

When David arrived at the battlefield, he heard a giant man shouting across the valley. This giant's name was Goliath, and he was over nine feet tall! He wore heavy armor and carried a huge spear.

"Send me your best fighter!" Goliath yelled. "If he wins, we will serve you. But if I win, you will serve us!"

All the soldiers of Israel were afraid. No one wanted to fight the giant.

But David was not afraid. "I will fight him!" he said bravely.

King Saul tried to give David armor and weapons, but they were too heavy for the young boy.

Instead, David took his shepherd's sling and picked up five smooth stones from a stream. He walked out to meet the giant with faith in his heart and trust in God.

"You come to me with sword and spear," David called to Goliath, "but I come to you in the name of the Lord!"

Goliath laughed at the small boy, but David placed a stone in his sling, spun it around, and let it fly.

The stone hit Goliath right in the forehead, and the giant fell to the ground!

All the soldiers cheered! David had defeated the giant with just a small stone and great faith.

From that day on, everyone knew that David was special. With God's help, even the smallest person can do great things when they have courage and faith.`,
    genre: Genre.BIBLICAL_STORIES,
    timePeriod: TimePeriod.BIBLICAL,
    genderPreference: GenderPreference.MALE,
    ageGroup: AgeGroup.ELEMENTARY,
    source: 'The Bible - 1 Samuel 17',
    author: 'Biblical Account',
    estimatedReadingTime: 6,
    hasAudio: true,
    hasVideo: false,
    tags: ['courage', 'faith', 'bible', 'giant', 'shepherd', 'victory']
  },
  {
    id: '3',
    title: 'The Little Star Who Lost Her Way',
    content: `High up in the velvet sky, there lived a little star named Stella. She was the youngest star in her constellation family, and she sparkled with the brightest silver light.

Every night, Stella would shine down on Earth, helping guide ships across the ocean and lighting the way for travelers. She loved her job and was very proud to be helpful.

But one night, a great cosmic wind blew through space. It was so strong that it pushed Stella far away from her family. When the wind stopped, she found herself all alone in a dark corner of the sky.

"Help!" she called out, but her family was too far away to hear her tiny voice.

Stella felt scared and lonely. She tried to shine as brightly as she could, but without her family nearby, her light seemed much dimmer.

As she floated through space, she met Luna, a wise old moon.

"Why do you look so sad, little star?" asked Luna kindly.

"I've lost my family," Stella explained. "I don't know how to get back home, and my light isn't bright enough to help anyone anymore."

Luna smiled gently. "Your light is always bright enough, dear one. Sometimes we just need to remember how special we are. Look down at Earth - do you see that little girl in the window?"

Stella looked down and saw a young girl sitting by her bedroom window, making a wish.

"She's wishing on you," Luna explained. "Your light may seem small to you, but to her, you're the most beautiful star in the sky."

Stella felt her light grow warmer and brighter. She realized that even when she felt lost, she could still bring hope and wonder to others.

Just then, she heard familiar voices calling her name. Her star family had been searching for her all night!

"Stella! There you are!" they sang in harmony.

As Stella reunited with her family, she learned that sometimes getting lost helps us discover just how bright our own light can shine. And from that night on, whenever she saw someone who looked lost or lonely, she would shine a little brighter, just for them.`,
    genre: Genre.FANTASY,
    timePeriod: TimePeriod.CONTEMPORARY,
    genderPreference: GenderPreference.FEMALE,
    ageGroup: AgeGroup.PRESCHOOL,
    source: 'Original Story Haven Tale',
    author: 'Story Haven Collection',
    estimatedReadingTime: 4,
    hasAudio: true,
    hasVideo: true,
    tags: ['stars', 'family', 'lost', 'hope', 'kindness', 'space']
  },
  {
    id: '4',
    title: 'The Singing Robot',
    content: `In the year 2150, in a city that floated among the clouds, there lived a small robot named Beep. Unlike other robots who were programmed for serious jobs like building or computing, Beep had a very special gift - he could sing the most beautiful songs.

Beep's voice could make flowers bloom instantly, rain clouds turn into sunshine, and sad people smile again. But there was one problem: Beep was very shy.

Every morning, the other robots would go to their important jobs - some would fly spaceships, others would build new cloud buildings, and some would tend to the sky gardens. But Beep would hide in his charging station, too nervous to let anyone hear his wonderful voice.

One day, a terrible storm covered the floating city in dark clouds. The solar panels couldn't get sunlight, and all the robots were running low on power. The city was in danger of falling from the sky!

The Robot Council gathered to discuss what to do. "We need sunlight!" announced the Mayor-Bot. "But these storm clouds are too thick and dark."

From his hiding spot, Beep heard everything. He knew his singing could clear the clouds, but he was so scared to perform in front of everyone.

Just then, he saw a little girl robot named Pip, who was even smaller than him. She was crying because her power was almost gone.

"Don't worry, Pip," Beep said softly, and without thinking, he began to sing a gentle lullaby.

As his voice filled the air, something magical happened. The dark clouds began to part, and golden sunlight streamed through. All the robots stopped what they were doing and listened in amazement.

Beep's song was so beautiful that it not only cleared the storm but also filled every robot's power cells to full capacity. The city was saved!

From that day forward, Beep was no longer shy. He became the city's official Weather Singer, and whenever clouds gathered, he would sing them away. He learned that sharing your special gifts with others is what makes them truly magical.

And every night, he would sing a gentle song to help all the little robots dream of electric sheep and digital rainbows.`,
    genre: Genre.SCIENCE_FICTION,
    timePeriod: TimePeriod.CONTEMPORARY,
    genderPreference: GenderPreference.NO_PREFERENCE,
    ageGroup: AgeGroup.EARLY_ELEMENTARY,
    source: 'Original Story Haven Tale',
    author: 'Story Haven Collection',
    estimatedReadingTime: 7,
    hasAudio: true,
    hasVideo: true,
    tags: ['robots', 'singing', 'future', 'shyness', 'courage', 'helping others']
  },
  {
    id: '5',
    title: 'Twinkle, Twinkle, Little Mouse',
    content: `Twinkle, twinkle, little mouse,
Running through the cozy house.
Up above the world so high,
Like a diamond in the sky.

In a tiny hole you live,
Taking only what you need to give
To your babies, small and sweet,
Keeping them warm and fed and neat.

Twinkle, twinkle, little mouse,
Cleaning up around the house.
When the cat has gone away,
Then you come outside to play.

Scurrying here and running there,
Whiskers twitching in the air.
Looking for a crumb of cheese,
Or some seeds among the leaves.

Twinkle, twinkle, little mouse,
Safest in your little house.
When the day is nearly done,
You've had your tiny bit of fun.

Back into your hole so deep,
Time for little mice to sleep.
Dream of cheese and fields of grain,
Until morning comes again.

Twinkle, twinkle, little mouse,
Thank you for visiting our house.
Though you're small, you have your place
In this world of love and grace.`,
    genre: Genre.RHYME_STORIES,
    timePeriod: TimePeriod.CONTEMPORARY,
    genderPreference: GenderPreference.NO_PREFERENCE,
    ageGroup: AgeGroup.TODDLER,
    source: 'Original Story Haven Tale',
    author: 'Story Haven Collection',
    estimatedReadingTime: 2,
    hasAudio: true,
    hasVideo: false,
    tags: ['rhyme', 'mouse', 'animals', 'house', 'bedtime', 'gentle']
  }
]

export function getStoriesByFilters(filters: StoryFilters): Story[] {
  return sampleStories.filter(story => {
    if (filters.genre && story.genre !== filters.genre) return false
    if (filters.timePeriod && story.timePeriod !== filters.timePeriod) return false
    if (filters.genderPreference && filters.genderPreference !== GenderPreference.NO_PREFERENCE && story.genderPreference !== filters.genderPreference && story.genderPreference !== GenderPreference.NO_PREFERENCE) return false
    if (filters.ageGroup && story.ageGroup !== filters.ageGroup) return false
    if (filters.maxReadingTime && story.estimatedReadingTime > filters.maxReadingTime) return false
    if (filters.hasAudio && !story.hasAudio) return false
    if (filters.hasVideo && !story.hasVideo) return false
    
    return true
  })
}

export function getStoryById(id: string): Story | undefined {
  return sampleStories.find(story => story.id === id)
}