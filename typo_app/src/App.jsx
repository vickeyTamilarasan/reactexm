import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useRef } from 'react';
import { useEffect } from 'react';

function App() {
  const [text, setText] = useState('');
  const count = useRef(0);
  const previous = useRef()

  useEffect(() => {
    count.current = count.current + 1
    previous.current = text
  })
  return (
    <>
      <div className='row'>
        <div className='col-6 p-2' id='text'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam temporibus eligendi velit tempora vitae soluta sint odit aliquam earum voluptas dolorum neque adipisci perspiciatis fugiat placeat accusamus unde, repellat quae!
            Eum iure ipsa, amet beatae minima, expedita excepturi ex reiciendis quos itaque qui aspernatur mollitia nesciunt? Eligendi odit vel, nemo voluptatum expedita maiores dignissimos minima consequuntur illo consectetur nihil maxime?
            Consequuntur, facilis qui rerum expedita sapiente provident est nulla, voluptate exercitationem ipsa aut magni dicta voluptates voluptas quia commodi dolore reiciendis error, atque omnis quis consequatur neque amet! Inventore, placeat?
            Dolor sunt voluptates id corrupti suscipit, quibusdam explicabo sed pariatur laborum iste modi non eius tenetur eaque dicta dolores earum sit voluptatum quod minus fugit laudantium praesentium aliquid quos. Enim.
            Rem distinctio minus quisquam. Debitis molestiae excepturi hic ipsa distinctio error iure perferendis voluptatum omnis pariatur inventore dicta illum, quam amet reiciendis recusandae rem, ducimus, atque aspernatur expedita laborum soluta?
            Vitae optio quae porro. Quas quasi, a recusandae sit excepturi fuga itaque harum libero vero vel quisquam dolor fugiat ut obcaecati ratione nemo tenetur sunt, aperiam repellat, eius perspiciatis laborum!
            Architecto soluta, autem consectetur eligendi aut, praesentium, consequuntur voluptate optio reiciendis molestias nobis! Aut optio incidunt quis magni nostrum tenetur dolore magnam sequi temporibus quo amet, et ipsam, quia porro!
            Sapiente est tempora perspiciatis sunt natus atque nostrum, ratione veritatis quae similique corrupti et tempore? Debitis ipsum eum molestias iusto culpa, eaque earum ratione, nobis sint recusandae porro vero inventore.
            Error voluptas consectetur magni ad officiis assumenda maiores explicabo, ab exercitationem! In voluptas provident, minus facere vero reprehenderit qui debitis. Asperiores magnam atque non. Dolorum, voluptatibus. Suscipit accusantium nobis minima?
            Amet illum explicabo nemo tempora rerum sint adipisci voluptatem, dolores cumque doloribus accusamus quasi vero, officiis reprehenderit distinctio dolor. Ex sit corporis aliquid libero odit eaque officia nulla, saepe unde?
            Necessitatibus, saepe et rerum fugiat veniam expedita cumque nulla vel impedit molestiae nam asperiores deserunt delectus, tenetur assumenda! Unde repellendus exercitationem in impedit autem. Adipisci soluta eos ad at perspiciatis.
            Similique corporis consequuntur fugiat perferendis ex quisquam quidem odit adipisci neque minima! Iure magnam maiores nostrum impedit aspernatur est placeat officiis, doloribus ipsa blanditiis suscipit, cum temporibus necessitatibus perferendis laudantium?
            Non cupiditate eligendi illo id eius, itaque modi iste officia deleniti est magni, commodi, sequi mollitia obcaecati! Illum, soluta fugiat dolorum sunt unde nihil, atque necessitatibus, doloribus fuga ipsam officiis?
            Deserunt praesentium, nihil modi, commodi recusandae cupiditate sequi reprehenderit id nesciunt blanditiis nostrum ex. Libero, quod repellendus. Eveniet, possimus minus! Reprehenderit ex eaque rem ducimus eligendi at aspernatur odit esse!
            Ipsum voluptatem maxime voluptatum accusantium cumque deserunt exercitationem hic dolorem pariatur corrupti, eaque saepe et ratione assumenda mollitia earum placeat architecto reprehenderit aut molestiae esse unde? Totam aliquid velit incidunt?
            Iusto magni animi consectetur amet! Odit sunt quae fuga minus fugiat velit est sed corrupti esse obcaecati voluptate, ipsum dolores unde eius. Sint at, adipisci assumenda placeat quae officiis ullam!
            Quas non, aperiam beatae aspernatur voluptate accusantium sapiente consectetur sint eum voluptatum voluptas asperiores veritatis dolorem nihil officia modi! Dolore, adipisci distinctio harum tenetur inventore quis nesciunt dignissimos iusto autem?
            Soluta nisi natus saepe repellat eum! Illo nesciunt voluptas dolorum dolore unde repudiandae ad, vel tempore vero mollitia omnis, doloremque sit amet quidem, labore ex nobis illum nemo iusto facere!
            Tempora sunt expedita molestias quo at eos saepe voluptatum praesentium molestiae nobis fugiat in nulla velit perspiciatis incidunt aperiam totam error iure ex, atque maiores odio. Dolores assumenda repudiandae tempora.
            Repellendus doloremque quaerat labore cumque tempore aut, qui dolor ex laboriosam minima asperiores voluptates odit voluptatem quod atque, error delectus numquam quasi quis sunt sit modi earum pariatur? Veniam, porro.
            Accusantium similique totam, possimus ipsam quisquam nemo iste dicta, odio dolores distinctio nisi illum neque unde molestias perspiciatis nobis atque quibusdam et aliquid amet non natus ratione saepe explicabo! Atque.
            Debitis voluptatum temporibus fugit quisquam, culpa exercitationem sit praesentium neque quae, deserunt minus qui saepe deleniti incidunt laborum assumenda odit velit dolor sunt, iusto fugiat necessitatibus. Rem vitae eum dolorem!
            Illo cumque asperiores nostrum animi reprehenderit culpa, incidunt doloribus iste saepe sint inventore adipisci quod rem necessitatibus autem ipsa eveniet facere! Facere soluta esse quidem deserunt hic temporibus, optio perferendis.
            Mollitia et illo ipsam similique, praesentium distinctio dolorum voluptates eius culpa quam error perferendis provident, earum illum omnis beatae commodi? Sunt exercitationem architecto harum molestiae est inventore provident magnam asperiores.
            Assumenda, inventore! Libero commodi facere impedit inventore officiis tempore. Veritatis porro cumque temporibus! Eligendi esse, mollitia hic repellendus non temporibus saepe dolorem a minima. Nihil illo beatae explicabo quis voluptatem.
            Explicabo, doloremque sunt voluptate consectetur maiores voluptates ipsam odio sed commodi natus sit molestias fugiat doloribus minima nulla earum pariatur veritatis qui quisquam aut minus officiis. Autem quia ab assumenda!
            Nobis illo quisquam quasi facere, eos numquam nam officia vel magni enim accusamus exercitationem quia impedit dolorem mollitia deserunt inventore. Illo optio officiis tempore quis, eaque quos quisquam? Alias, doloremque?
            Vero molestias dolorum suscipit ducimus ullam? Aliquam accusamus, reiciendis in, amet, magnam hic vel quibusdam inventore facilis beatae cum architecto fuga iure placeat maxime. Esse ut aut id accusamus a!
            Alias omnis voluptate esse consequuntur, itaque soluta! A obcaecati ex quas alias cumque molestiae quasi harum nesciunt. Dicta, quia. Laborum eligendi est tempore doloremque ea ut sequi distinctio incidunt veritatis!
            Deserunt excepturi, optio quod assumenda id aliquid porro cum animi iste labore fugit maxime accusamus ex fugiat quae. Nihil delectus, minus voluptas architecto facere est in quam alias distinctio quibusdam?
            Corrupti quae adipisci, dolore architecto praesentium culpa quo perspiciatis sint numquam ipsum at eos voluptates, magnam fuga fugit, autem perferendis odit maiores dignissimos accusantium. Mollitia, quis nostrum! Ratione, nulla qui.
            Sapiente dolorum architecto, iure velit optio tempora rerum, vel debitis suscipit et quibusdam ab? Expedita, laboriosam odit asperiores quisquam rerum at fugiat vero repudiandae sequi praesentium eveniet, maxime natus cupiditate.
            Natus praesentium ipsa maxime. Odit optio sed sequi voluptatem id autem placeat et sapiente ad commodi facilis nobis vitae ipsam consequuntur odio necessitatibus, inventore, laudantium beatae provident modi minima. Modi!
            Ab delectus eaque obcaecati sequi qui voluptatibus harum saepe non, sint vero temporibus illum quam in odit cupiditate quisquam tempore. Voluptas neque quos possimus quod temporibus! Cum deserunt dolore laboriosam.
            Esse iste ea illo id cum soluta exercitationem nisi sapiente, repellendus numquam fugit aperiam harum, nihil quod fugiat deserunt nulla dolores enim aliquam quia ipsam eius. Doloremque repellat at dolorem.
            Natus iusto corrupti tenetur quo modi! Velit eos in quasi amet consequatur molestiae harum similique. Consectetur alias, numquam nisi tenetur iste ullam, saepe atque esse doloremque harum fugiat libero. Consequatur.
            Excepturi, placeat. Eligendi quod mollitia in, a dolor numquam est voluptatum asperiores culpa explicabo nesciunt blanditiis odio architecto repellat minima placeat dolorem officia autem repellendus voluptate deleniti non quia nostrum!
            Sint odit aliquam fugiat voluptatum facere ullam mollitia, voluptates officia velit officiis? Repudiandae amet saepe voluptates distinctio porro, assumenda inventore eum esse sit at repellendus molestias eaque qui eos harum?
            Quis corrupti nisi mollitia? Pariatur officiis exercitationem itaque nostrum quis veniam a tempora nihil autem sapiente qui sequi, praesentium ab vero voluptatum odio reiciendis atque saepe, amet facilis, dolore recusandae?
            Debitis, iure ex ullam quae sit recusandae. Voluptatem provident debitis obcaecati commodi? Mollitia laudantium rerum, error optio eveniet perspiciatis? Eligendi ab beatae at temporibus doloremque dolor fugiat cum, mollitia recusandae?</p>
        </div>
        <div className='col-6 p-2'>
          <h1>
            No of Time key Used : {count.current}
            <br />
          </h1>
          <form  >
            <textarea className='form-control m-1' name="" id=""
              cols="30"
              rows="100"
              placeholder='Start to write'
              value={text}
              onChange={(e) => setText(e.target.value)}></textarea>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
