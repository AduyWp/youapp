import { useState, useEffect } from 'react';
import useStyles from './style';
import classNames from 'classnames';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Home = (props) => {
  const {
    profile,
    tagInput,
    tags,
    handleInputChange,
    handleInputKeyDown,
    handleTagRemove,
    goToProfile,
    handleEditSubmit
  } = props;

  const styles = useStyles();

  return (
    <>
      <main className={classNames(styles.background, 'min-h-screen')}>
        <div className="z-10 w-full items-center justify-between flex">
          <p className="left-0 top-0 flex items-center pb-5 pt-4 px-4" onClick={goToProfile}>
            <ArrowBackIos fontSize="small" />
            <span className="font-mono font-bold ml-1">Back</span>
          </p>
          <Button className="px-4" onClick={handleEditSubmit}>
            <Typography variant="body2" className='blueGradient'>
              Save
            </Typography>
          </Button>
        </div>
        <div className={classNames(styles.form, 'mb-4 mt-10 px-10')}>
          <div>
            <Typography variant="body2" className={classNames('goldenGradient pb-3')}>
              Tell everyone about yourself
            </Typography>
            <Typography variant="h5" className={styles.white}>
              What interest you?
            </Typography>
          </div>
          <div className={classNames(styles.interestBackground, 'mt-8 px-4 py-4')}>
            <div className="flex items-center no-wrap flex-wrap">
              {tags.map((tag, index) => (
                <div key={index} className="tag mb-2">
                  {tag}
                  <button onClick={() => handleTagRemove(tag)}>&times;</button>
                </div>
              ))}
            </div>
            <TextField
              type="text"
              value={tagInput}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              placeholder="Type and press Enter to add tags"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;