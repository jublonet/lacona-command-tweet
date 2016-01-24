/** @jsx createElement */
import {createElement, Phrase} from 'lacona-phrase'

class TweetContent extends Phrase {
  describe () {
    return (
      <argument text='message'>
        <String maxlen={140} />
      </argument>
    )
  }
}

class TweetCommand extends Phrase {
  describe () {
    return (
      <choice>
        <sequence>
          <literal text='tweet ' />
          <TweetContent id='message' />
        </sequence>
        <sequence>
          <literal text='post ' />
          <TweetContent id='message' />
          <literal text='to twitter' />
        </sequence>
        <sequence>
          <literal text='post to Twitter ' />
          <TweetContent id='message' />
        </sequence>
      </choice>
    )
  }

  execute (result) {
    send_to_twitter(result.message)
  }
}
