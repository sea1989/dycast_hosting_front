import React from 'react';
import './style.css';
import UploadForm from '../../assets/UploadForm.jpg';
import Cover from '../../assets/cover.jpg';

export default function FormAdd() {
  return (
    <div className='form-add-panel'>
      <div className='back'>Upload video</div>
      <div className='form-add-wrapper'>
        <section className='upload'>
          <img src={UploadForm} width='483' height='340' alt='upload status' />
          <div className='upload__info'>
            <p>
              File name: <span>PugFunnyVideo.mov</span>
            </p>
            <p>
              Generated Link: <span>https://decast/0-fa24HVG</span>
            </p>
          </div>
        </section>

        <form
          className='form-add'
          method='post'
          action='http://echo.htmlacademy.ru'
        >
          <fieldset>
            <legend>Ownership</legend>
            <label for='Title'>Author s name:</label>
            <input
              type='text'
              id='Title'
              placeholder='How other decasters could call you?'
            />

            <label for='Tags'>Owner address:</label>
            <input
              type='text'
              id='Tags'
              placeholder='0x8A2366254A5A59E8073B0975399F7466B7830A66'
            />
          </fieldset>
          <fieldset>
            <legend>Video settings</legend>
            <label for='Title'>Title</label>
            <input
              type='text'
              id='Title'
              placeholder='Describe video in one sentence'
            />
            <label for='Description'>Description:</label>
            <textarea
              id='Description'
              placeholder='Describe in detail what your video is about'
            />

            <label for='cover'>Cover:</label>
            <ul className='cover-list'>
              <li className='cover-item'>
                <img src={Cover} width='148' height='140' alt='upload status' />
              </li>

              <li className='cover-item'>
                <img src={Cover} width='148' height='140' alt='upload status' />
              </li>

              <li className='cover-item'>
                <img src={Cover} width='148' height='140' alt='upload status' />
              </li>

              <li className='cover-item'>
                <img src={Cover} width='148' height='140' alt='upload status' />
              </li>
            </ul>

            <label for='Tags'>Tags:</label>
            <input
              type='text'
              id='Tags'
              placeholder='Add keywords to help decast community find your video among others'
            />

            <ul className='tag-list'>
              <li className='tag-item'>Tagname</li>
              <li className='tag-item'>Tagname</li>
              <li className='tag-item'>Tagname</li>
              <li className='tag-item'>Tagname</li>
              <li className='tag-item'>Tagname</li>
              <li className='tag-item'>Tagname</li>
            </ul>
          </fieldset>
          <fieldset>
            <legend>Promotion settings</legend>
            <div className='toggle-wrapper'>
              <label class='switch'>
                <input type='checkbox' />
                <span class='slider round'></span>
              </label>
              <span className='toggle-text'>Enable Ads in the video</span>
            </div>

            <label for='Rating'>Rating:</label>

            <div className='checkbox-wrapper'>
              <input
                type='radio'
                id='restrictions'
                name='fav_language'
                value='restrictions'
              />
              <label for='restrictions'>
                <span>G</span>No restrictions at all
              </label>
            </div>

            <div className='checkbox-wrapper'>
              <input
                type='radio'
                id='Children'
                name='fav_language'
                value='Children'
              />
              <label for='Children'>
                <span>PG</span>Children are encouraged to watch the film with
                their parents
              </label>
            </div>

            <div className='checkbox-wrapper'>
              <input type='radio' id='13' name='fav_language' value='13' />
              <label for='13'>
                <span>PG-13</span>Do not watch under 13
              </label>
            </div>

            <div className='checkbox-wrapper'>
              <input type='radio' id='17' name='fav_language' value='17' />
              <label for='17'>
                <span>R</span>Everyone under 17 must watch in parent company
              </label>
            </div>

            <div className='checkbox-wrapper'>
              <input
                type='radio'
                id='older'
                name='fav_language'
                value='older'
              />
              <label for='older'>
                <span>NC-17</span>You must be older than 17 to watch that
              </label>
            </div>

            <label for='Language:'>Language:</label>
            <input
              type='text'
              id='Language:'
              placeholder=' Select your Language'
            />
          </fieldset>

          <fieldset>
            <legend>Other</legend>
            <div className='checkbox-wrapper'>
              <input type='radio' id='NSFW' name='fav_language' value='NSFW' />
              <label for='NSFW'>NSFW</label>
            </div>
          </fieldset>

          <hr />

          <input type='submit' value='Отправить' className='button-standart' />
        </form>
      </div>
    </div>
  );
}
