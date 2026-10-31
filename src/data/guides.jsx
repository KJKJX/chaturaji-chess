import endgame_cooperation_guide from "../imgs/headlines/endgame_cooperation_guide.png";
import understanding_d3_guide from "../imgs/headlines/understanding_d3_guide.png";
import beginner_guide from "../imgs/headlines/beginner_guide.png";
import guide_bd2 from "../imgs/guide_diagrams/kings_pawn_bd2.png";
import guide_n_structure from "../imgs/guide_diagrams/kings_pawn_n_structure.png";
import guide_v_structure from "../imgs/guide_diagrams/kings_pawn_v_structure.png";
import guide_j_structure from "../imgs/guide_diagrams/kings_pawn_j_structure.png";
import guide_opening_trap from "../imgs/guide_diagrams/kings_pawn_opening_trap.png";
import guide_f4_continuation from "../imgs/guide_diagrams/kings_pawn_f4_continuation.png";
import guide_jonnie_trap from "../imgs/guide_diagrams/kings_pawn_jonnie_trap.png";
import guide_modern_system from "../imgs/guide_diagrams/kings_pawn_modern_system.png";

export const guides = [
  // {
  //   title: "From 1500-2000: How to Begin Playing Chaturaji",
  //   img: beginner_guide,
  //   link: "",
  //   from: "Universoul_Crown",
  //   date: "2026-09-03T20:00:00.000Z",
  //   minRead: 5,
  //   sections: [
  //     {
  //       type: "paragraph",
  //       text: "So, you've stumbled upon the Chaturaji variant. You think it's weird. Like, 4 players on a normal chess board? Boats instead of Rooks? No Queen!?!? Well then, you would stick to normal chess. But if you're like me, you don't like normal chess. You want a new adventure.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "*So, where do you start? And how do you get good at it?* Simple. Read this guide right here. This guide will teach you simple terms, starter techniques, and mistakes to avoid. From this guide, you should be able to go from 1500 rank to 2000+, an early yet groundbreaking milestone, within 250 matches. Sounds like alot, huh? Well then, let's start now! Here is the contents:",
  //     },
  //     {
  //       type: "list",
  //       list: [
  //         "Understanding the Foundation (Board, Winning & Perks)",
  //         "Terms You Will Hear & See",
  //         "Warming Up With A Good Match",
  //         "Openings, Of Course",
  //         "Staying Safe",
  //         "Play A Match!",
  //         "Stay Commited",
  //       ],
  //     },
  //     {
  //       type: "title",
  //       text: "Understanding the Foundation (Board, Winning & Perks)",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Let's start with the board:",
  //     },
  //     {
  //       type: "board",
  //       board: [
  //         "red.boat.a1",
  //         "red.knight.b1",
  //         "red.bishop.c1",
  //         "red.king.d1",
  //         "red.pawn1.a2",
  //         "red.pawn2.b2",
  //         "red.pawn3.c2",
  //         "red.pawn4.d2",
  //       ],
  //       caption: "The starting position of the board.",
  //     },
  //   ],
  // },
  {
    title: "A Guide to Chaturaji Endgame Cooperation",
    img: endgame_cooperation_guide,
    link: "https://www.chess.com/clubs/forum/view/a-guide-to-chaturaji-endgame-cooperation",
    from: "IHaveTheSauce",
    date: "2026-06-12T20:00:00.000Z",
    minRead: 6,
    sections: [
      {
        type: "paragraph",
        text: "Hi all! This is intended to be a guide to what I think is one of the most fundamental yet most commonly misunderstood skills in Chaturaji. Hopefully, whatever skill level you are, you can learn something by reading. This will definitely be a decently long read, so feel free to just read one of the sections. (Rooks = Ships). Here is a guide to the sections below.",
      },
      {
        type: "list",
        list: [
          "Two Player Endgame Cooperation & Why it is Important",
          "Understanding Opponent Motivations & Threats",
          "Endgame Control",
          "Sacrificing Material in Unbalanced Endgames",
          "Social Signaling, Trust & Risk",
        ],
      },

      {
        type: "title",
        text: "Two Player Endgame Cooperation & Why it is Important",
      },
      {
        type: "paragraph",
        text: 'Firstly, it is important to understand why cooperation is so important in the first place. This concept is often misunderstood by players in the community and labeled as "unfair play". However, you must realize that Chaturaji is a 4-player game that inherently invites cooperation. Your goal is obviously to get the most points, but oftentimes, you lack the power to do this alone. Let\'s look at an example to illustrate this concept.',
      },
      {
        type: "image",
        image:
          "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/IHaveTheSauce/php3pn0q27cil3ecExATjS.png",
        className: "h-[20vw]",
      },
      {
        type: "paragraph",
        text: "Let's consider this scenario from Blue's perspective. Here, Blue needs at least 3 points to get second, and at least 10 points to get first. Now comes the big question: what should Blue's game plan be?",
      },
      {
        type: "paragraph",
        text: "Looking at the position, you might notice that Blue clearly has significantly more piece power than Green. If Blue wanted to, they could prevent Green from promoting, take all their pawns, and checkmate them easily, but this is not the best strategy.",
      },
      {
        type: "paragraph",
        text: "In normal chess we are always taught checkmate is our end goal, and it can be uncomfortable to allow an opponent to promote completely unobstructed, but remember, in Chaturaji, our end goal is points. If we disallow green from promotion, we get 5 points at most, but if we allow green's 1-point pawns to turn into 5-point rooks, suddenly we can get 13 points, securing first place!",
      },
      {
        type: "paragraph",
        text: "So, what should blue's game plan be? Push their own pawns, promote to rooks, and trade two of their rooks for two of green's rooks. Then and only then, checkmate green.",
      },
      {
        type: "paragraph",
        text: "Another important thing to notice here is that Green has something to gain from this cooperation as well. If green trades two rooks with blue, they get second place; if they don't, then they will only get 3rd or 4th place. Cooperation only works when both sides benefit from the exchange.",
      },
      {
        type: "paragraph",
        text: "You should cooperate in Chaturaji not because you have a secret vendetta against players, but because you are fighting for the best spot among 4 players. If you do this by yourself, you must directly fight against 3 players simultaneously. If you cooperate with another player, both players benefit, and you can gain a substantial advantage over two of the three players you are competing against. I think we can clearly see why this is so important!",
      },
      {
        type: "paragraph",
        text: "Think back to the first example of cooperation I showed you. That example is the MOST IMPORTANT form of cooperation. In many of your games, especially as you start to climb in rating, you will end up in scenarios where you and another player are left, and you both need to promote your 1-point pawns to 5-point rooks to trade to get enough points for first and second place. If you find yourself in a scenario where you and one other player are alive, before you decide to viciously attack the other player, stop and ask yourself, what can I gain from winning their material right now? What can I gain from cooperating with them?",
      },

      {
        type: "title",
        text: "Understanding Opponent Motivation & Threats",
      },
      {
        type: "paragraph",
        text: "Let's consider this example:",
      },
      {
        type: "image",
        image:
          "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/IHaveTheSauce/php7spvj8cc84096BxJ4p5.png",
        className: "h-[20vw]",
      },
      {
        type: "paragraph",
        text: "You are blue, and green has just promoted their pawn to a rook. You might notice that green's rook is completely unprotected, and almost anyone would immediately take the rook without a second thought, but this is not necessarily your best move!",
      },
      {
        type: "paragraph",
        text: "This might not make sense, but let's look at the position from green's perspective. If Blue decides to take the free rook, they get 5 free points, putting them at 16, and Green still has 11. After Blue takes the free rook, Green thinks and realizes that now that they have only one pawn left. They can only trade one rook at best, giving them 16 points. After they trade their rook, they will have no pieces left, and will likely get mated by Blue using rook and king.",
      },
      {
        type: "paragraph",
        text: "16 points does absolutely nothing for green because red has 20 points. Now, they have no motivation to keep playing, and they simply resign, giving blue 3 more points, and leaving blue's total at 19 points. Because Blue decided to take Green's free rook, Green lost motivation to play because they are unlikely to improve from third place to second place.",
      },
      {
        type: "paragraph",
        text: "Blue should simply defend their rook with their knight. They will still gain 5 points from Green's rook; the only difference is that Green gains 5 points as well. This leaves Green with 16 points and 5 points they can still trade. This is meaningfully different because when Green trades their last promoted pawn, they will go from 16 points to 21 points, surpassing Red, and securing second place.",
      },
      {
        type: "paragraph",
        text: "My point with this example is this: You can certainly win material from your opponent in a two player endgame, but understand that if you win free material from your opponent, you may be making it impossible or incredibly unlikely for them to improve their standings.",
      },
      {
        type: "paragraph",
        text: "Once you take away your opponent's motivation to keep playing, they have no reason to give you more points than the absolute minimum they can. (Usually 3 points from a resignation). Always consider how your opponent's motivation changes when you win material from them in these two player endgames.",
      },
      {
        type: "paragraph",
        text: "As an exercise, look at the example below where it is Green's move, and try to understand why Blue's move accomplishes nothing.",
      },
      {
        type: "image",
        image:
          "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/IHaveTheSauce/phpnurstglproku3iqe5mD.png",
        className: "h-[20vw]",
      },
      {
        type: "paragraph",
        text: "Blue threatens a skewer, but if blue wins green's rook, green has nothing to play for. If you end up in a similar position to Green, do not move your king. Move your rook instead. If Blue takes your free king, they gain nothing. Again, understanding your opponent's motivation is key to navigating these endgames.",
      },

      {
        type: "title",
        text: "Endgame Control",
      },
      {
        type: "paragraph",
        text: "In order for cooperation to succeed, there needs to be a balance of power, and understanding the power dynamics of a given position is absolutely necessary. Let's take a look at different types of power players hold in these endgames.",
      },
      {
        type: "title",
        text: "Piece Power",
      },
      {
        type: "paragraph",
        text: 'The easiest and most basic type of power is piece power. This is no different than what you do when you play normal chess. You look at the position, and you evaluate it as if it was a normal chess game and you ask, "Who is winning?"',
      },
      {
        type: "paragraph",
        text: "As an example, If I have two rooks and a bishop, and my opponent has one pawn and their king, obviously I have the superior piece power.",
      },
      {
        type: "paragraph",
        text: "Sometimes, you may have equal piece power despite technically having more pieces. e.g. King and Knight vs King.",
      },
      {
        type: "title",
        text: "Point Advantage (1-3)",
      },
      {
        type: "paragraph",
        text: "For 2-player endgames with a 1-3 point advantage, piece power determines who comes out on top. Point advantage of 1-3 matters most when piece power is equal (the game is or will become a draw).",
      },
      {
        type: "paragraph",
        text: "If you have a 3-point advantage, you can resign to prevent your opponent from eventually surpassing you. e.g. you just have 16 points, king, and a pawn, versus your opponent that has 13 points, a king, and a rook. Instead of letting your opponent take your pawn and checkmate you (4 points), resign and give them only 3 points. This will tie you and your opponent for points.",
      },
      {
        type: "title",
        text: "4-Point Advantage",
      },
      {
        type: "paragraph",
        text: 'This is a powerful weapon that essentially nullifies piece power. This "4-point advantage" originates from the fact that your king is worth exactly 3 points. An important part of this advantage is the existence of the resignation button because when there are only two players left, resignation just gives your opponent 3 points and immediately ends the game (on your turn).',
      },
      {
        type: "paragraph",
        text: "Let's look at an example:",
      },
      {
        type: "image",
        image:
          "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/IHaveTheSauce/phpj212cucu6cc4akUnPoo.png",
        className: "h-[20vw]",
      },
      {
        type: "paragraph",
        text: "Here, Red is stuck in a position where Yellow is threatening to win their pawns, and Red cannot reach them in time. However, because Red has a 4-or-more point advantage, they can simply resign here, saving second place, as yellow will only end up with 14 points.",
      },
      {
        type: "paragraph",
        text: "In this position there is actually a better move, and that move is Kc4!! This move utilizes the same principle as resignation because Red's king must either be taken or avoided, meaning they can no longer take Red's pawn. Yellow does not want to take Red's king because it is only 3 points, so they are forced to move their king away. After Yellow moves their king away, Red can play Kb4, defending their pawns.",
      },
      {
        type: "paragraph",
        text: "When you have a 4-point advantage in a 2-player endgame your king becomes an incredibly powerful piece, because your opponent gains nothing from taking it. Once you secure a 4-point advantage in these endgames, it is impossible for your opponent to surpass you in points.",
      },
      {
        type: "title",
        text: "Point Reliance",
      },
      {
        type: "paragraph",
        text: 'This is the power that makes cooperation so important. It simply means that you have points that your opponent needs that they cannot take by force. If your opponent has 10 points and needs 2 more points to get first place, and they have stronger piece power than you, you hold no "points reliance" power over them. They can simply win your material by force.',
      },
      {
        type: "paragraph",
        text: 'Look back to the second example in section 2. Notice both Blue and Green hold "point reliance" power. This is precisely why I suggested that Green should not move their skewered king. Blue relies on Green for their 5-point rook and vice versa.',
      },
      {
        type: "paragraph",
        text: 'It is important to note that you can "offer up" your king to your opponent, trusting that they will not take it. For example, in that same example from section two, Green can offer up their king because they understand Blue is reliant on their 5-point rook, but you should avoid risking this possibility as much as possible.',
      },

      {
        type: "title",
        text: "Sacrificing Material in Unbalanced Endgames",
      },
      {
        type: "paragraph",
        text: "This is a concept that very few in the community understand. Let's look at this example below:",
      },
      {
        type: "image",
        image:
          "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/IHaveTheSauce/phpqo607ecuruj74JOpjKO.png",
        className: "h-[20vw]",
      },
      {
        type: "paragraph",
        text: "Let's think about this scenario from Red's perspective. Applying what we have already learned, we can clearly see that it is a bad idea to immediately attack Green and try to win their material; letting them promote allows us to gain 13 points instead of only 5 (at most). That much is clear. We also notice that right now, green has no motivation to promote their pawns into rooks. If green promoted and traded their two rooks right now, they would have 10 points and no pieces to trade, substantially less than the 20 points they need to actually improve their standing.",
      },
      {
        type: "paragraph",
        text: "Now that we recognize this as Red, we must also realize that it in order to motivate Green's cooperation, we must find a reason for Green to keep playing as well. So what is Red's plan to get first place?",
      },
      {
        type: "paragraph",
        text: 'Here is the solution: Red should "sacrifice" a bishop and rook to green completely for free. This might sound completely insane, but think about what it actually changes for Red? Red still has two rooks to trade for Green\'s two rooks, Red still has more points than Green, and Red is still in control of the game.',
      },
      {
        type: "paragraph",
        text: "Once Green has those 10 extra points, suddenly they have a reason to promote their two pawns, because they will get 10 more points, putting them at 20 total. After that, the players will get 2 points each (both players end up with a king, a draw rewards all alive players 2 points). This would leave Red with 24 points and Green with 22 points.",
      },
      {
        type: "paragraph",
        text: "Now, look back to the starting position. Red should \"gift\" Green 10 points, but what should Green do to force red to do this? The answer is simple: Green should do literally nothing until Red gives them the free points. Why? Green loses nothing if Red takes all their pawns because they were already in last place. Red gains nothing from taking Green's pawns and king. Green's pawns are the only bargaining chip Green has, and promoting them immediately completely removes this power.",
      },
      {
        type: "paragraph",
        text: "Red is completely reliant on Green promoting, and Green has no reason to promote until they can improve their standings.",
      },
      {
        type: "paragraph",
        text: "Again, this all stems from completely understanding your opponent's motivations, and ensuring that your opponent stands to gain something from the cooperation. If you provide no benefit for your opponent, your opponent has no reason to cooperate with you.",
      },
      {
        type: "paragraph",
        text: "If you are in a scenario similar to Green, recognize that your opponent is reliant on you. Do not give your opponent what they want until you are guaranteed your benefit as well.",
      },

      {
        type: "title",
        text: "Social Signaling, Trust & Risk",
      },
      {
        type: "paragraph",
        text: "This is often overlooked because (theoretically) Chaturaji is a completely logical game. However, humans are not machines. All of us–I mean ALL of us–have played emotionally because we were frustrated or angry over an opponent playing in a perceived emotional or illogical way.",
      },
      {
        type: "paragraph",
        text: 'When you are in a two-player endgame, making moves that establish trust or communicate intent is incredibly important. Look back at the scenario in example 4. I suggest Green should essentially "do nothing" by making moves that make no progress in the position. This communicates to Red that Green is looking for something before they are willing to cooperate. You want to convey that you are waiting for your opponent to give you something you need.',
      },
      {
        type: "paragraph",
        text: "Communicating intent is also useful for signaling trust. Revisit the very first example shown. Blue has superior piece power, but relies on Green promoting both pawns. If I was playing Blue, I would focus on making non-threatening moves, communicating with Green that I have no intent to attack, and strengthening our alliance. If I instead made threats towards Green, I make it less likely they will want to work with me.",
      },
      {
        type: "paragraph",
        text: "This circles back to why those positions in section 2 were so important. When you threaten to win material from the player that you rely on, you risk them giving up or being frustrated and refusing to cooperate further.",
      },
      {
        type: "paragraph",
        text: "Finally, let's discuss risk. I will reiterate a point I briefly mentioned earlier. Empty threats that do not benefit your opponent, despite being empty, should generally be treated as real, as long as it does not compromise your position. For example, if I have a 4-point advantage but rely on my opponent for more points, I should move my king if my opponent puts it under attack as long as I don't lose my advantage.",
      },
      {
        type: "paragraph",
        text: "I say this because ignoring an opponent's attack puts trust in them to act in a logical manner, which simply will not always happen.",
      },
      {
        type: "paragraph",
        text: "Take this position:",
      },
      {
        type: "image",
        image:
          "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/IHaveTheSauce/phpc8ol3tdgvr0c5OwDpce.png",
        className: "h-[20vw]",
      },
      {
        type: "paragraph",
        text: "Here, Red has a 4-point advantage. Red could play Kxb5, winning another point. Blue gains nothing from capturing, so in a purely logical world, this would be completely fine, but this move expresses an intent to threaten Blue, and suggests a lack of cooperation.",
      },
      {
        type: "paragraph",
        text: 'When Red plays this move, Blue thinks "Red just wants to stomp all over me and win all my points, and there is nothing I can do about it." Suddenly, Blue will feel more inclined to take Red\'s king. Additionally, ask yourself what real benefit Red gets from playing this move. It awards them no further power over Blue, while simultaneously introducing completely unnecessary risk.',
      },
      {
        type: "paragraph",
        text: "One last thing to note about this position is that if Red had only a 3-point lead, Kxb5 would be a 100% justified move. In that scenario, it would give Red a real advantage over Blue. Remember though, although a justified move, it does carry risk. A good player will look at Red's move, understand that it gave Red a clear and actual benefit, and not overreact.",
      },
      {
        type: "paragraph",
        text: "Thanks for reading!",
      },
      {
        type: "paragraph",
        text: "If you have any suggestions, insights, or questions, let me know!",
      },
    ],
  },
  {
    title: "Understanding 1. d3",
    img: understanding_d3_guide,
    link: "https://www.chess.com/clubs/forum/view/opening-guide-kings-pawn",
    from: "IHaveTheSauce",
    date: "2026-10-28T20:00:00.000Z",
    minRead: 8,
    sections: [
      {
        type: "paragraph",
        text: `This is an introductory guide into the king’s pawn opening, or 1. d3! In my opinion, this “opening” has the greatest depth out of all the established first moves one can make. For this article, I will mostly be focusing on the most common ways to play the king’s pawn, but there are some other valid and interesting less well-known ideas.`,
      },
      {
        type: "paragraph",
        text: `Additionally, a few notes before we start. First, the names I use are not meant to dictate what these openings should be called, but just to make talking about all the different structures easier. This makes it a lot simpler to discuss the ideas.`,
      },
      {
        type: "paragraph",
        text: `I am going to refer a lot to move notation for Red. This is because this opening is most common for red players. It also just makes move notation easier. However, these ideas are NOT limited to just red players. Any color can play this opening, although the resulting structures will tend to look different.`,
      },
      {
        type: "title",
        text: "Where Does the King’s Pawn Opening Come From?",
      },
      {
        type: "paragraph",
        text: `When this variant was first created, it was primarily played in the format of “hyper fiesta”. Blitz Chaturaji was not at all popular, and strategies were just beginning to develop. The so called “degenerate opening” that we now know as King’s Pawn, was first created as a way to catch players off guard and go for cheap kills amongst the premoving chaos. Despite this, for a long time it was not regarded as a very serious opening, and the Fianchetto, or 1. b3 was usually regarded as the optimal choice.`,
      },
      {
        type: "paragraph",
        text: "For a little further reading on this, check out this article by @BoxJellyFishChess:",
      },
      {
        type: "link",
        text: "Chaturaji history on Chess.com: openings and trading",
        link: "https://www.chess.com/clubs/forum/view/chaturaji-history-on-chess-com-openings-and-trading",
      },
      {
        type: "paragraph",
        text: `This opinion of the King’s Pawn (King’s Pawn Opening) as a cheap trick but not a viable strategy continued as the Chaturaji community grew and migrated towards blitz instead of hyper. However, the dominant player at the time, @hest1805, uniquely stood out. While everyone was still playing the Standard (1. c3), @hest1805 would play the King’s Pawn almost every single game. In the blitz Chaturaji scene, he was the first to demonstrate its viability and to popularize it amongst other players.`,
      },
      {
        type: "paragraph",
        text: "From there, a few opening traps were popularized by @Runner. We will briefly touch on these later, but to see them for yourself more in-depth, check out this article:",
      },
      {
        type: "link",
        text: "Using maths to ruin Chaturaji (or mathematical game theory)",
        link: "https://www.chess.com/clubs/forum/view/using-maths-to-ruin-chaturaji-or-mathematical-game-theory",
      },
      {
        type: "paragraph",
        text: `These two reasons are, in my opinion, the reasons why King’s Pawn started to massively grow in popularity with the red pieces. It is usually an aggressive opening and paired with the advantage of having the first move, it can be very powerful. Now, I would say that many higher-level players the King’s Pawn opening as red, although there is still a lot of diversity.`,
      },
      {
        type: "paragraph",
        text: `@Articpolarbear prefers the fianchetto (1. b3). @Luxeix, @Crazydoll95 prefer the standard (1.c3). @Flaming_FM, me, @King_Chessable prefer the king’s pawn (1.d3). Obviously, it doesn’t just come down to the opening. Whatever you decide to play, you can improve greatly!`,
      },
      {
        type: "title",
        text: "Common Structures with 2. Bd2",
      },
      {
        type: "paragraph",
        text: "The most common continuation is 2. Bd2, checking the player to your left. As red in the picture below, here are the moves I am thinking about playing in the near future.",
      },
      {
        type: "image",
        image: guide_bd2,
        className:
          "mx-auto mt-2 mb-3 h-[18vw] w-auto rounded-md border border-white/10 object-contain",
      },
      {
        type: "paragraph",
        text: "The main idea here is to slide your king to safety along the 1st rank and fianchetto it on b2. This is a very safe spot for the king.",
      },
      {
        type: "paragraph",
        text: "Additionally, you should aim to put your bishop on either the b4 or c3 square. Many players prefer to place the bishop on the c3 square, so it covers the diagonal that the king is on. However, choosing the right square for the bishop is complex and it depends a lot on the opening choices of the other players.",
      },
      {
        type: "paragraph",
        text: "Generally having your king on a safe square is very important before you start attacking, so even before getting your developing your knight or pushing your pawns too far, try to get to what I am calling the N-Structure:",
      },
      {
        type: "title",
        text: "The N-Structure",
      },
      {
        type: "paragraph",
        text: "Examples of the N-Structure:",
      },
      {
        type: "image",
        image: guide_n_structure,
        className:
          "mx-auto mt-2 mb-3 h-[18vw] w-auto rounded-md border border-white/10 object-contain",
      },
      {
        type: "link",
        text: "N-Structure example game 1",
        link: "https://www.chess.com/variants/chaturaji/game/109346697/1/1",
      },
      {
        type: "link",
        text: "N-Structure example game 2",
        link: "https://www.chess.com/variants/chaturaji/game/110352535/1/1",
      },
      {
        type: "paragraph",
        text: `An easy way to remember this is by looking at the alternating ranks for red’s pawns. It forms this sort of “italicized N” shape. This is a very solid structure to get to, and this is the point you can start looking to attack one of the players adjacent to you.`,
      },
      {
        type: "paragraph",
        text: "One thing to notice is my choice to play Bc3 instead of Bb4. Bb4 is certainly not a bad move, but I chose Bc3 because I noticed the yellow bishop lining up on the same diagonal as my king. This is not very threatening right now, but down the line, a check like this has the potential to be devastating. Imagine green could follow up yellow’s check with a move like Nd1+! It is just generally better to stop a disaster like that from happening sooner rather than later.",
      },
      {
        type: "paragraph",
        text: "Once you have achieved this setup, you want to start pushing your a-pawn up to a4. DO NOT overextend. Sometimes it is valuable to push your pawns much further, especially if the player you are attacking is very weak and cannot fight back, but overextending can sometimes kill your attack before it even starts. Ensure that pushing your pawns does not allow your opponent to create a blockade. If you stop yourself from making meaningful progress towards the player to your right, oftentimes you will just end up getting crushed by the player to your left. Patience pays off, and sometimes literally doing nothing and wasting a few moves is better than prematurely attacking.",
      },
      {
        type: "paragraph",
        text: "Think carefully about where you want to put your knight. Generally, I would recommend putting your knight on a3 once you have pushed your a-pawn to a4. This is because your pawn on c2 will often become a target that is not easily supported if your knight is somewhere else. It also gives you a well-supported outpost on c4 if the player to your right ever pushes their King’s pawn forward.",
      },
      {
        type: "paragraph",
        text: "Nevertheless, ensure that you evaluate the position before mindlessly playing moves. Playing Na3 is oftentimes the correct way forward, but it is oftentimes the wrong way forward. Just always remain cognizant of the targets the player to your left has.",
      },
      {
        type: "title",
        text: "The V-Structure",
      },
      {
        type: "paragraph",
        text: "The V-Structure – A common end goal for the King’s Pawn. Both green and red have achieved this structure in the diagram.",
      },
      {
        type: "image",
        image: guide_v_structure,
        className:
          "mx-auto mt-2 mb-3 h-[18vw] w-auto rounded-md border border-white/10 object-contain",
      },
      {
        type: "paragraph",
        text: "From here, push your a and b pawns up the board. Another useful move to keep in mind is d4. This move can be very useful to prevent the player to your left from getting a powerful outpost on e3. (In the above position, green could play the d3 equivalent of e4.) Notice that if red captures, green is not necessarily in a huge rush to recapture. It not only serves as another piece blocking the green and blue bishops from seeing each other, but it also hinders the attack of yellow.",
      },
      {
        type: "paragraph",
        text: "Example of the V-Structure:",
      },
      {
        type: "link",
        text: "V-Structure example game",
        link: "https://www.chess.com/variants/chaturaji/game/108250186/1/1",
      },
      {
        type: "title",
        text: "The J-Structure",
      },
      {
        type: "paragraph",
        text: "Another way to continue 2. Bd2 is with the more aggressive J-Structure. It looks like this. Here, the pawns resemble a “J”, hence the name.",
      },
      {
        type: "image",
        image: guide_j_structure,
        className:
          "mx-auto mt-2 mb-3 h-[18vw] w-auto rounded-md border border-white/10 object-contain",
      },
      {
        type: "paragraph",
        text: "Examples of the J-Structure:",
      },
      {
        type: "link",
        text: "J-Structure example game 1",
        link: "https://www.chess.com/variants/chaturaji/game/108814946/40/1",
      },
      {
        type: "link",
        text: "J-Structure example game 2",
        link: "https://www.chess.com/variants/chaturaji/game/108260404/1/1",
      },
      {
        type: "paragraph",
        text: "The key move here is 3. Bb4 instead of 3. Bc3. Historically, players would play Bc3, trade bishops with yellow, and achieve an N-Structure with the knight on c3. This is a perfectly valid way to play, and I myself have had good results with this, but sometimes going for the J-Structure, although riskier, provides more flexibility and aggressive attacking chances. (When you trade and go for the classic N-Structure, your attack is not very fast. It will be a slower and less dynamic game.)",
      },
      {
        type: "paragraph",
        text: "The point being that you reject the early bishop trade with yellow, instead mobilizing your knight early against blue. You skip the extra steps of fianchettoing your king, and you instead go for an attack.",
      },
      {
        type: "paragraph",
        text: "This is where you have a lot more flexibility with where to put the knight. If you decide to go for Na3, I would generally recommend playing a3 and a4 first. Your rook pawn is a key attacker, and if you play Na3 early, you often waste time and will have to move it back to make progress.",
      },
      {
        type: "paragraph",
        text: "For Nc3, your way of attack is the common fork pattern against the standard:",
      },
      {
        type: "paragraph",
        text: "I call this a “fork pattern”, but it is often a bad idea to trade your knight for a bishop too early. It often kills your attack. Simply keeping the tension and having a very powerful knight is sufficient in the early game.",
      },
      {
        type: "paragraph",
        text: "The player to your right may try playing c5 in response to the J-Structure, especially after Nc3, in which case it is important to try to control the b5 square with your a-pawn to prevent ideas like b. Kb5 and b. Nb5.",
      },
      {
        type: "paragraph",
        text: "If you choose Nd2, the goal is to reroute the knight to b3 and to put either your bishop or knight on the c5 square.",
      },
      {
        type: "paragraph",
        text: "Wherever you place the knight, the aim here is quick activation of the knight and bishop and opposite cooperation. For pawn moves, b3 usually isn’t played here, and instead there is a bigger emphasis on advancing the a-pawn and playing c3 instead of b3.",
      },
      {
        type: "paragraph",
        text: "Finally, watch out for y. Bh6, g. e4+ ideas. I would not recommend this plan for yellow, but some players still play it, and it can leave you in a bad position or even mated if you are not careful. Don’t go for this opening if you think your opposite is likely to attack you and might not understand opposite cooperation!",
      },
      {
        type: "title",
        text: "Opposite Cooperation",
      },
      {
        type: "paragraph",
        text: "Now, I mentioned that the J-Structure is riskier, and this where I must briefly touch on a concept called Opposite Cooperation, more strongly, Opposite Teaming. This deserves its own article entirely, and there isn’t that much existing writing discussing this in-depth, but the important thing to know is that the concept of cooperating with your opposite gets increasingly important, especially as we cover these more aggressive variations of the King’s Pawn.",
      },
      {
        type: "paragraph",
        text: "This idea is controversial in the community, probably because it can often feel unfair to others, but it needs to be stated that regardless of how you may feel about it, it is a valid strategy, and for many top players, an agreed upon consensus of the early game.",
      },
      {
        type: "paragraph",
        text: "If you want more concrete evidence, I did analysis of my own games, and although it is not mentioned in my original article, there is some weak evidence that supports this hypothesis. In 952 2200+ games, me and my opposite both occupied the top two spots in 28.9% of the games, which is much higher than 16.7% you would expect if results were randomly assigned to players. Additionally, the correlation between me finishing in the top 2 and my opposite finishing in the top 2 is -.200, which is more positive than the -.333 we would expect if placements were randomly assigned to players.",
      },
      {
        type: "paragraph",
        text: "Regardless, it will become very important as we discuss this opening further. For further reading:",
      },
      {
        type: "link",
        text: "Analyzing my Chaturaji games",
        link: "https://www.chess.com/clubs/forum/view/analyzing-my-chaturaji-games",
      },
      {
        type: "link",
        text: "Interesting opposite cooperation lines",
        link: "https://www.chess.com/clubs/forum/view/interesting-opposite-cooperation-lines",
      },
      {
        type: "link",
        text: "Chaturaji fair play discussion",
        link: "https://www.chess.com/clubs/forum/view/chaturaji-fair-play-discussion",
      },
      {
        type: "link",
        text: "Teaming and courtesy in Chaturaji",
        link: "https://www.chess.com/clubs/forum/view/teaming-and-courtesy-in-chaturaji",
      },
      {
        type: "paragraph",
        text: "Some of these are a little outdated and do not reflect modern Chaturaji in my opinion, but I will go more in depth another time.",
      },
      {
        type: "title",
        text: "Opening Traps",
      },
      {
        type: "paragraph",
        text: "The most common one is the well-known opening trap against green invented by @Runner:",
      },
      {
        type: "image",
        image: guide_opening_trap,
        className:
          "mx-auto mt-2 mb-3 h-[18vw] w-auto rounded-md border border-white/10 object-contain",
      },
      {
        type: "paragraph",
        text: "Again, check out this article for more in depth diagrams:",
      },
      {
        type: "link",
        text: "Using maths to ruin Chaturaji (or mathematical game theory)",
        link: "https://www.chess.com/clubs/forum/view/using-maths-to-ruin-chaturaji-or-mathematical-game-theory",
      },
      {
        type: "paragraph",
        text: "The main thing to know here is that basically the only good move for green in these positions is 1. f4. There is a mating trap waiting for green if they decide to do something else. For 1g. f3, 2r. Bf4 and 2y. Be7+ (or if they play fianchetto 2y. g5+). For 1g. f2, green can lose in a variety of ways. Usually, 2y. Be7+ or 2y. g5+.",
      },
      {
        type: "paragraph",
        text: "The other moves are much of the same thing, and although you technically can play 1g. Nf3, this is just horrible. DO NOT PLAY THIS.",
      },
      {
        type: "paragraph",
        text: "The correct continuation for green is usually 1g. f4, 2g. Kg4. I know it looks weird, but usually you can achieve an N-Structure or some other formation and the game goes on.",
      },
      {
        type: "image",
        image: guide_f4_continuation,
        className:
          "mx-auto mt-2 mb-3 h-[18vw] w-auto rounded-md border border-white/10 object-contain",
      },
      {
        type: "title",
        text: "The Jonnie",
      },
      {
        type: "image",
        image: guide_jonnie_trap,
        className:
          "mx-auto mt-2 mb-3 h-[18vw] w-auto rounded-md border border-white/10 object-contain",
      },
      {
        type: "paragraph",
        text: "You can use this if the player to your right plays the fianchetto opening and does not create an escape square for their king or block your bishop’s line of site in time. This was popularized by @Jonnie7.",
      },
      {
        type: "paragraph",
        text: "It is hard to know if this trap is any good, as you basically give your opposite 8 points of free material, but it definitely has some merit. Especially when the player to your right is grossly overextending, it is a powerful tool and a good way to get out of tough situations, even if you are just threatening it.",
      },
      {
        type: "paragraph",
        text: "Finally, this more obscure trap. I have only seen @Taran0915 play this one.",
      },
      {
        type: "paragraph",
        text: "Personally, I do not think this is very good, as it is killing your opposite early, and it will leave you in an uncomfortable position. Going for this trap, in my opinion, is kind of like playing for 2nd from the very start. However, it is still a move, and one that you should be aware of.",
      },
      {
        type: "title",
        text: "Modern Lines & Play",
      },
      {
        type: "paragraph",
        text: "Originally popularized by @Tanishk_kr_prajapati, then adopted by @krkalex, @BazoingaBazooka, @oh-no-botezgambit, @clock_bht, @King_Chessable as well as many others, this is the part that I think has a lot of untapped potential. As I mentioned before, the King’s Pawn presents a lot of opportunities for opposite teaming. Especially in more modern times, this has become increasingly common, although it is still far from being standard play.",
      },
      {
        type: "paragraph",
        text: "If you ask me, these ideas could outline the future meta of chaturaji, and they can carry an almost oppressive power. Here are a few examples of what I mean:",
      },
      {
        type: "link",
        text: "Modern play example game 1",
        link: "https://www.chess.com/variants/chaturaji/game/107132154/1/1",
      },
      {
        type: "link",
        text: "Modern play example game 2",
        link: "https://www.chess.com/variants/chaturaji/game/107131738/1/1",
      },
      {
        type: "paragraph",
        text: "So, what exactly do I mean by “modern play”? Modern play is the shift from opposite cooperation (teaming) being a secondary mechanism with which to gain an advantage to the primary decider for the 4-player-stage.",
      },
      {
        type: "paragraph",
        text: "This is compatible with any opening, as it is simply a playstyle, but in modern play, the King’s Pawn offers incredibly fast development for the knight and bishop. Oftentimes conventional openings like the standard lose their efficacy. Look at the position below:",
      },
      {
        type: "paragraph",
        text: "It is only the first round. Blue has opted for the generally accepted standard, yet blue very quickly gets into danger after 2. Bd2+ Kb6 Be7+ Kg4, 3. Nc3 c7 Nf6+ Kf3.",
      },
      {
        type: "image",
        image: guide_modern_system,
        className:
          "mx-auto mt-2 mb-3 h-[18vw] w-auto rounded-md border border-white/10 object-contain",
      },
      {
        type: "paragraph",
        text: "Seemingly out of nowhere, red and yellow have a massive attack on blue. r. Na4 y. Nd7 r. Nc5+ is coming, and blue will either lose all their pieces, or get mated very quickly. This idea of 2. Bd2 immediately followed by Nc3 or Na3 to create immediate attacks is what I am calling The Modern System (or the Modern for short).",
      },
      {
        type: "paragraph",
        text: "This system has a lot of depth, and I cannot cover very much of it in this article 1. Because this article is already too long, and 2. Because much of it remains undiscovered and relatively unknown.",
      },
      {
        type: "paragraph",
        text: "However, the key idea of this system is to shift your playstyle from the more “classical” Chaturaji to an emphasis on opposite cooperation and trust. For this reason, the modern system requires an opposite that has a sufficiently deep understanding of these concepts to attempt this.",
      },
      {
        type: "paragraph",
        text: "You might even refuse your opposite’s hanging pieces to achieve a more long-term goal against one of the players adjacent to you.",
      },
      {
        type: "paragraph",
        text: "Generally, the Modern looks something like this. Oftentimes, blue will opt for the more passive standard, but this just allows red and yellow to gain a massive attack against them.",
      },
      {
        type: "paragraph",
        text: "One sideline worth mentioning is this Ke2 or Kd7 idea, cutting off the escape square of the green or blue king. Here, red plays Ke2 to prevent the green king from escaping to f3.",
      },
      {
        type: "title",
        text: "A Few More Variations & Final Thoughts",
      },
      {
        type: "paragraph",
        text: "We are almost done! If you got this far, thanks for taking the time to read this! I am just going to briefly introduce a few more variations and answer a few questions.",
      },
      {
        type: "title",
        text: "The bishop’s attack",
      },
      {
        type: "paragraph",
        text: "This is a unique king’s pawn opening that was popularized by @BazoingaBazooka. This was originally a “degenerate” technique used in hyper to catch players off guard.",
      },
      {
        type: "paragraph",
        text: "The key idea here is 2. Bc4, cutting off the escape square created by the standard. You can either sacrifice the bishop for the knight (contrary to popular belief, this is a perfectly good trade) or you can plant it on e6.",
      },
      {
        type: "paragraph",
        text: "Examples:",
      },
      {
        type: "link",
        text: "Bishop’s attack example game 1",
        link: "https://www.chess.com/variants/chaturaji/game/110344984/1/1",
      },
      {
        type: "link",
        text: "Bishop’s attack example game 2",
        link: "https://www.chess.com/variants/chaturaji/game/101702791/1/1",
      },
      {
        type: "link",
        text: "Bishop’s attack example game 3",
        link: "https://www.chess.com/variants/chaturaji/game/110267461/1/1",
      },
      {
        type: "title",
        text: "2. Bf4 (I don’t have a name for this one)",
      },
      {
        type: "paragraph",
        text: "This opening is the recommended follow up (in my opinion) if you open with King’s Pawn as red and everyone else plays the standard. It restricts green’s movement, and you will usually end up giving up your bishop for green’s knight. Again, contrary to popular belief, this is NOT a bad trade. Oftentimes it is very good.",
      },
      {
        type: "paragraph",
        text: "Example:",
      },
      {
        type: "link",
        text: "2. Bf4 example game",
        link: "https://www.chess.com/variants/chaturaji/game/107065112/1/1",
      },
      {
        type: "title",
        text: "The Modified Standard",
      },
      {
        type: "paragraph",
        text: "This follows a lot of the structure of the standard, but it includes an early push of the king’s pawn as well.",
      },
      {
        type: "paragraph",
        text: "Example:",
      },
      {
        type: "link",
        text: "Modified Standard example game",
        link: "https://www.chess.com/variants/chaturaji/game/110217641/1/1",
      },
      {
        type: "title",
        text: "Questions",
      },
      {
        type: "paragraph",
        text: "Q: Should I go for an early fork to win the bishop with my knight? The King’s Pawn often leads to opportunities where you can win an opponent’s bishop for your knight, but oftentimes keeping the tension and the knight on the board is much better. Your knight is usually the most powerful attacking piece in the early game. Don’t be too eager to lose it!",
      },
      {
        type: "paragraph",
        text: "Q: Should I always follow these structures? No. Although I have given you the general and important ideas to understanding d3, true understanding comes from playing it. The real game is messy, and you should always evaluate the position to try to come up with the best moves possible. Just look at the examples I provided! The players don’t just play the generic opening moves; they react to the position.",
      },
      {
        type: "paragraph",
        text: "Q: Which Structure should I play? The N-Structure is a very solid setup, and you can definitely aim for it with any color. The modified standard can also be an interesting option, but this is harder to play. As red, I usually try to go for the J-Structure. You will find that most top players that play 1.d3 either choose the J-Structure as well. If you want to try to play hyper-aggressive, go for the Modern. See what works best for you!",
      },
      {
        type: "paragraph",
        text: "Thanks for reading, and let me know if you have any questions or comments, or if missed credit for a player!",
      },
    ],
  },
].map((guide, i) => {
  return { ...guide, id: i + 1 };
});
