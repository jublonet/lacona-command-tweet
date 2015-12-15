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
          {text: 'Afrikaans', value: {name: 'Afrikaans', code: 'af'}},
          {text: 'Albanian', value: {name: 'Albanian', code: 'sq'}},
          {text: 'Arabic', value: {name: 'Arabic', code: 'ar'}},
          {text: 'Armenian', value: {name: 'Armenian', code: 'hy'}},
          {text: 'Azerbaijani', value: {name: 'Azerbaijani', code: 'az'}},
          {text: 'Basque', value: {name: 'Basque', code: 'eu'}},
          {text: 'Belarusian', value: {name: 'Belarusian', code: 'be'}},
          {text: 'Bengali', value: {name: 'Bengali', code: 'bn'}},
          {text: 'Bosnian', value: {name: 'Bosnian', code: 'bs'}},
          {text: 'Bulgarian', value: {name: 'Bulgarian', code: 'bg'}},
          {text: 'Burmese', value: {name: 'Burmese', code: 'my'}},
          {text: 'Catalan', value: {name: 'Catalan', code: 'ca'}},
          {text: 'Cebuano', value: {name: 'Cebuano', code: 'ceb'}},
          {text: 'Chichewa', value: {name: 'Chichewa', code: 'ny'}},
          {text: 'Chinese', value: {name: 'Chinese', code: 'zh-CN'}},
          {text: 'Chinese (Simplified)', value: {name: 'Chinese (Simplified)', code: 'zh-CN'}},
          {text: 'Chinese (Traditional)', value: {name: 'Chinese (Traditional)', code: 'zh-TW'}},
          {text: 'Croatian', value: {name: 'Croatian', code: 'hr'}},
          {text: 'Czech', value: {name: 'Czech', code: 'cs'}},
          {text: 'Danish', value: {name: 'Danish', code: 'da'}},
          {text: 'Dutch', value: {name: 'Dutch', code: 'nl'}},
          {text: 'English', value: {name: 'English', code: 'en'}},
          {text: 'Esperanto', value: {name: 'Esperanto', code: 'eo'}},
          {text: 'Estonian', value: {name: 'Estonian', code: 'et'}},
          {text: 'Filipino', value: {name: 'Filipino', code: 'tl'}},
          {text: 'Finnish', value: {name: 'Finnish', code: 'fi'}},
          {text: 'French', value: {name: 'French', code: 'fr'}},
          {text: 'Galician', value: {name: 'Galician', code: 'gl'}},
          {text: 'Georgian', value: {name: 'Georgian', code: 'ka'}},
          {text: 'German', value: {name: 'German', code: 'de'}},
          {text: 'Greek', value: {name: 'Greek', code: 'el'}},
          {text: 'Gujarati', value: {name: 'Gujarati', code: 'gu'}},
          {text: 'Haitian Creole', value: {name: 'Haitian Creole', code: 'ht'}},
          {text: 'Hausa', value: {name: 'Hausa', code: 'ha'}},
          {text: 'Hebrew', value: {name: 'Hebrew', code: 'iw'}},
          {text: 'Hindi', value: {name: 'Hindi', code: 'hi'}},
          {text: 'Hmong', value: {name: 'Hmong', code: 'hmn'}},
          {text: 'Hungarian', value: {name: 'Hungarian', code: 'hu'}},
          {text: 'Farsi', value: {name: 'Farsi', code: 'fa'}},
          {text: 'Icelandic', value: {name: 'Icelandic', code: 'is'}},
          {text: 'Igbo', value: {name: 'Igbo', code: 'ig'}},
          {text: 'Indonesian', value: {name: 'Indonesian', code: 'id'}},
          {text: 'Irish', value: {name: 'Irish', code: 'ga'}},
          {text: 'Italian', value: {name: 'Italian', code: 'it'}},
          {text: 'Japanese', value: {name: 'Japanese', code: 'ja'}},
          {text: 'Javanese', value: {name: 'Javanese', code: 'jw'}},
          {text: 'Kannada', value: {name: 'Kannada', code: 'kn'}},
          {text: 'Kazakh', value: {name: 'Kazakh', code: 'kk'}},
          {text: 'Khmer', value: {name: 'Khmer', code: 'km'}},
          {text: 'Korean', value: {name: 'Korean', code: 'ko'}},
          {text: 'Lao', value: {name: 'Lao', code: 'lo'}},
          {text: 'Latin', value: {name: 'Latin', code: 'la'}},
          {text: 'Latvian', value: {name: 'Latvian', code: 'lv'}},
          {text: 'Lithuanian', value: {name: 'Lithuanian', code: 'lt'}},
          {text: 'Macedonian', value: {name: 'Macedonian', code: 'mk'}},
          {text: 'Malagasy', value: {name: 'Malagasy', code: 'mg'}},
          {text: 'Malay', value: {name: 'Malay', code: 'ms'}},
          {text: 'Malayalam', value: {name: 'Malayalam', code: 'ml'}},
          {text: 'Maltese', value: {name: 'Maltese', code: 'mt'}},
          {text: 'Maori', value: {name: 'Maori', code: 'mi'}},
          {text: 'Marathi', value: {name: 'Marathi', code: 'mr'}},
          {text: 'Mongolian', value: {name: 'Mongolian', code: 'mn'}},
          {text: 'Myanmar', value: {name: 'Myanmar', code: 'my'}},
          {text: 'Nepali', value: {name: 'Nepali', code: 'ne'}},
          {text: 'Norwegian', value: {name: 'Norwegian', code: 'no'}},
          {text: 'Persian', value: {name: 'Persian', code: 'fa'}},
          {text: 'Polish', value: {name: 'Polish', code: 'pl'}},
          {text: 'Portuguese', value: {name: 'Portuguese', code: 'pt'}},
          {text: 'Punjabi', value: {name: 'Punjabi', code: 'pa'}},
          {text: 'Romanian', value: {name: 'Romanian', code: 'ro'}},
          {text: 'Russian', value: {name: 'Russian', code: 'ru'}},
          {text: 'Serbian', value: {name: 'Serbian', code: 'sr'}},
          {text: 'Sesotho', value: {name: 'Sesotho', code: 'st'}},
          {text: 'Sinhala', value: {name: 'Sinhala', code: 'si'}},
          {text: 'Slovak', value: {name: 'Slovak', code: 'sk'}},
          {text: 'Slovenian', value: {name: 'Slovenian', code: 'sl'}},
          {text: 'Somali', value: {name: 'Somali', code: 'so'}},
          {text: 'Spanish', value: {name: 'Spanish', code: 'es'}},
          {text: 'Sundanese', value: {name: 'Sundanese', code: 'su'}},
          {text: 'Swahili', value: {name: 'Swahili', code: 'sw'}},
          {text: 'Swedish', value: {name: 'Swedish', code: 'sv'}},
          {text: 'Tajik', value: {name: 'Tajik', code: 'tg'}},
          {text: 'Tamil', value: {name: 'Tamil', code: 'ta'}},
          {text: 'Telugu', value: {name: 'Telugu', code: 'te'}},
          {text: 'Thai', value: {name: 'Thai', code: 'th'}},
          {text: 'Turkish', value: {name: 'Turkish', code: 'tr'}},
          {text: 'Ukrainian', value: {name: 'Ukrainian', code: 'uk'}},
          {text: 'Urdu', value: {name: 'Urdu', code: 'ur'}},
          {text: 'Uzbek', value: {name: 'Uzbek', code: 'uz'}},
          {text: 'Vietnamese', value: {name: 'Vietnamese', code: 'vi'}},
          {text: 'Welsh', value: {name: 'Welsh', code: 'cy'}},
          {text: 'Yiddish', value: {name: 'Yiddish', code: 'yi'}},
          {text: 'Yoruba', value: {name: 'Yoruba', code: 'yo'}},
          {text: 'Zulu', value: {name: 'Zulu', code: 'zu'}}
        ]} />
      </argument>
    )
  }
}


export function execute (result) {
  const toList = result.to || [{name: 'English', code: 'en'}]
  const from = (result.from && result.from.code) || 'auto'

  _.forEach(toList, to => {
    const body = encodeURI(result.phrase || result.url)
    const url = `https://translate.google.com/#${from}/${to.code}/${body}`
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

export default {
  sentences: [{Sentence, execute}]
}
