/** @jsx createElement */

import _ from 'lodash'
import URL from 'lacona-phrase-url'
import String from 'lacona-phrase-string'
import {createElement, Phrase} from 'lacona-phrase'

class Language extends Phrase {
  describe () {
    return (
      <argument text='language'>
        <list items={[
          {text: 'Afrikaans', value: 'af'},
          {text: 'Albanian', value: 'sq'},
          {text: 'Arabic', value: 'ar'},
          {text: 'Armenian', value: 'hy'},
          {text: 'Azerbaijani', value: 'az'},
          {text: 'Basque', value: 'eu'},
          {text: 'Belarusian', value: 'be'},
          {text: 'Bengali', value: 'bn'},
          {text: 'Bosnian', value: 'bs'},
          {text: 'Bulgarian', value: 'bg'},
          {text: 'Burmese', value: 'my'},
          {text: 'Catalan', value: 'ca'},
          {text: 'Cebuano', value: 'ceb'},
          {text: 'Chichewa', value: 'ny'},
          {text: 'Chinese', value: 'zh-CN'},
          {text: 'Chinese (Simplified)', value: 'ch-CN'},
          {text: 'Chinese (Traditional)', value: 'ch-TW'},
          {text: 'Croatian', value: 'hr'},
          {text: 'Czech', value: 'cs'},
          {text: 'Danish', value: 'da'},
          {text: 'Dutch', value: 'nl'},
          {text: 'English', value: 'en'},
          {text: 'Esperanto', value: 'eo'},
          {text: 'Estonian', value: 'et'},
          {text: 'Filipino', value: 'tl'},
          {text: 'Finnish', value: 'fi'},
          {text: 'French', value: 'fr'},
          {text: 'Galician', value: 'gl'},
          {text: 'Georgian', value: 'ka'},
          {text: 'German', value: 'de'},
          {text: 'Greek', value: 'el'},
          {text: 'Gujarati', value: 'gu'},
          {text: 'Haitian Creole', value: 'ht'},
          {text: 'Hausa', value: 'ha'},
          {text: 'Hebrew', value: 'iw'},
          {text: 'Hindi', value: 'hi'},
          {text: 'Hmong', value: 'hmn'},
          {text: 'Hungarian', value: 'hu'},
          {text: 'Farsi', value: 'fa'},
          {text: 'Icelandic', value: 'is'},
          {text: 'Igbo', value: 'ig'},
          {text: 'Indonesian', value: 'id'},
          {text: 'Irish', value: 'ga'},
          {text: 'Italian', value: 'it'},
          {text: 'Japanese', value: 'ja'},
          {text: 'Javanese', value: 'jw'},
          {text: 'Kannada', value: 'kn'},
          {text: 'Kazakh', value: 'kk'},
          {text: 'Khmer', value: 'km'},
          {text: 'Korean', value: 'ko'},
          {text: 'Lao', value: 'lo'},
          {text: 'Latin', value: 'la'},
          {text: 'Latvian', value: 'lv'},
          {text: 'Lithuanian', value: 'lt'},
          {text: 'Macedonian', value: 'mk'},
          {text: 'Malagasy', value: 'mg'},
          {text: 'Malay', value: 'ms'},
          {text: 'Malayalam', value: 'ml'},
          {text: 'Maltese', value: 'mt'},
          {text: 'Maori', value: 'mi'},
          {text: 'Marathi', value: 'mr'},
          {text: 'Mongolian', value: 'mn'},
          {text: 'Myanmar', value: 'my'},
          {text: 'Nepali', value: 'ne'},
          {text: 'Norwegian', value: 'no'},
          {text: 'Persian', value: 'fa'},
          {text: 'Polish', value: 'pl'},
          {text: 'Portuguese', value: 'pt'},
          {text: 'Punjabi', value: 'pa'},
          {text: 'Romanian', value: 'ro'},
          {text: 'Russian', value: 'ru'},
          {text: 'Serbian', value: 'sr'},
          {text: 'Sesotho', value: 'st'},
          {text: 'Sinhala', value: 'si'},
          {text: 'Slovak', value: 'sk'},
          {text: 'Slovenian', value: 'sl'},
          {text: 'Somali', value: 'so'},
          {text: 'Spanish', value: 'es'},
          {text: 'Sundanese', value: 'su'},
          {text: 'Swahili', value: 'sw'},
          {text: 'Swedish', value: 'sv'},
          {text: 'Tajik', value: 'tg'},
          {text: 'Tamil', value: 'ta'},
          {text: 'Telugu', value: 'te'},
          {text: 'Thai', value: 'th'},
          {text: 'Turkish', value: 'tr'},
          {text: 'Ukrainian', value: 'uk'},
          {text: 'Urdu', value: 'ur'},
          {text: 'Uzbek', value: 'uz'},
          {text: 'Vietnamese', value: 'vi'},
          {text: 'Welsh', value: 'cy'},
          {text: 'Yiddish', value: 'yi'},
          {text: 'Yoruba', value: 'yo'},
          {text: 'Zulu', value: 'zu'}
        ]} />
      </argument>
    )
  }
}


export function execute (result) {
  const toList = result.to || ['en']
  const from = result.from || 'auto'

  _.forEach(toList, to => {
    const body = encodeURI(result.phrase || result.url)
    const url = `https://translate.google.cn/#${from}/${to}/${body}`
    console.log(url)
    global.openURL(url)
  })
}


export class Sentence extends Phrase {
  describe () {
    return (
      <sequence>
        <literal text='translate ' category='action' />
        <choice merge={true}>
          <URL id='url' />
          <String argument='phrase' id='phrase' limit={1} splitOn=' ' />
        </choice>
        <sequence optional={true} merge={true}>
          <literal text=' from ' category='conjunction' />
          <Language id='from' />
        </sequence>
        <sequence optional={true} merge={true}>
          <literal text=' to ' />
          <repeat separator={<list items={[', ', ' and ', ', and ']} category='conjunction' limit={1} />} id='to' unique={true}>
            <Language />
          </repeat>
        </sequence>
      </sequence>
    )
  }
}
