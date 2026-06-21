import endgame_cooperation_guide from "../imgs/headlines/endgame_cooperation_guide.png";

export const guides = [
  {
    title: "A Guide to Chaturaji Endgame Cooperation",
    img: endgame_cooperation_guide,
    link: "https://www.chess.com/clubs/forum/view/a-guide-to-chaturaji-endgame-cooperation",
    from: "IHaveTheSauce",
    date: "6/12/26",
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
];
