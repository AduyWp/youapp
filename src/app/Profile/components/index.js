import { useState, useEffect } from 'react';
import useStyles from './style';
import classNames from 'classnames';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';
import Image from "next/image";

const Home = (props) => {
  const {
    profile,
    age,
    handleClickShowEdit,
    editProlile,
    handleChangeGender,
    gender,
    genders,
    formik,
    goToInterest,
    handleImageChange,
    selectedImage,
    handleButtonClick,
    image,
  } = props;

  const styles = useStyles();
  return (
    <>
      <main className={classNames(styles.background, 'min-h-screen')}>
        <div className="z-10 w-full items-center justify-between flex">
          <p className="left-0 top-0 flex items-center pb-5 pt-4 px-4">
            <ArrowBackIos fontSize="small" />
            <span className="font-mono font-bold ml-1">Back</span>
          </p>
          <Typography className="pr-8 pl-4" variant="subtitle1" type="bold">
            @{profile.data.username}
          </Typography>
          <Button className="px-4">
            <MoreHorizOutlinedIcon fontSize="small" style={{ color: 'white' }} />
          </Button>
        </div>
        <div className={classNames(styles.imageCover, 'px-4 mt-3 relative')}>
          {image === 'true' ? (
            <>
              <div className="relative">
                <div className={styles.cover}></div>
                <Image
                  src="/imageCover.png"
                  alt="Cover Image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: '190px' }}
                  priority
                />
              </div>
            </>
          ) : (
            <div className={styles.noCover}></div>
          )}

          <div className={styles.usernameBottom}>
            <Typography variant="subtitle1" type="bold">
              @{profile.data.username}, 
              {typeof profile.data.name !== 'undefined' && (
                <>
                  {age}
                </>
              )}
            </Typography>
            {gender ? (
            <Typography className="capitalize" variant="body2" type="bold">
              {gender}
            </Typography>
            ) : null }
            <div className="flex items-center mt-2">
              {typeof profile.data.zodiac !== 'undefined' ? (
                <div className="mr-1">
                  <Typography className={styles.horozo} variant="body2" type="bold">
                    {profile.data.zodiac}
                  </Typography>
                </div>
              ) : null }
              {typeof profile.data.horoscope !== 'undefined' ? (
                <div className="ml-1">
                  <Typography className={styles.horozo}variant="body2" type="bold">
                    {profile.data.horoscope}
                  </Typography>
                </div>
              ): null }
            </div>
          </div>
          {/*<Button className='editTop'>
            <BorderColorOutlinedIcon fontSize="small" style={{ color: 'white' }} />
          </Button>*/}
        </div>
        <div className='px-4 mt-7'>
          <div className={classNames(styles.backgroundDark, 'pl-4 pt-4 pb-6')}>
            {editProlile.showEdit === true ? (
              <>
                <form onSubmit={formik.handleSubmit}>
                  <div className="z-10 w-full items-center justify-between flex">
                    <Typography variant="subtitle1" type="bold">
                      About
                    </Typography>
                    <Button type="submit">
                      <Typography variant="body2" className={styles.golden}>
                        Save & Update
                      </Typography>
                    </Button>
                  </div>
                  <div className={classNames(styles.image, 'mt-6 items-center flex')}>
                    <div className="mr-4">
                      <TextField
                        type="file"
                        id="imageInput"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                      />
                      <Button onClick={handleButtonClick}>
                        {selectedImage ? (
                          <img
                            src={selectedImage}
                            alt="Selected Preview"
                          />
                        ) : (
                          <AddIcon fontSize="large" style={{ color: '#FEE3C0' }} />
                        )}
                      </Button>
                    </div>
                    <Typography variant="subtitle1" type="regular" className={classNames(styles.white)}>
                      Add Image
                    </Typography>
                  </div>
                  <div className={classNames(styles.form, 'z-10 w-full items-center justify-between flex mt-6')}>
                    <Typography variant="subtitle1" type="regular" className={classNames(styles.whiteColor, 'w-4/12')}>
                      Display Name:
                    </Typography>
                    <TextField
                      id="outlined-adornment-password"
                      name="name"
                      className="w-7/12 rounded" 
                      placeholder="Enter Name"
                      value={formik.values.name}
                      onChange={formik.handleChange} 
                      error={!!(formik.touched.name && formik.errors.name)}
                      helperText={(formik.touched.name && formik.errors.name) || ''}
                    />
                  </div>
                  <div className={classNames(styles.form, 'z-10 w-full items-center justify-between flex mt-3')}>
                    <Typography variant="subtitle1" type="regular" className={classNames(styles.whiteColor, 'w-4/12')}>
                      Gender:
                    </Typography>
                    <TextField
                      id="outlined-adornment-password"
                      name="gender"
                      select
                      className="w-7/12 rounded" 
                      placeholder="Enter Name"
                      value={formik.values.gender}
                      error={!!(formik.touched.gender && formik.errors.gender)}
                      helperText={(formik.touched.gender && formik.errors.gender) || ''}
                      onChange={formik.handleChange}
                    >
                      {genders.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                  </TextField>
                  </div>
                  <div className={classNames(styles.form, 'z-10 w-full items-center justify-between flex mt-3')}>
                    <Typography variant="subtitle1" type="regular" className={classNames(styles.whiteColor, 'w-4/12')}>
                      Birthday:
                    </Typography>
                    <TextField
                      id="outlined-adornment-password"
                      name="birthday"
                      className="w-7/12 rounded" 
                      placeholder="DD MM YYYY"
                      value={formik.values.birthday}
                      onChange={formik.handleChange} 
                      error={!!(formik.touched.birthday && formik.errors.birthday)}
                      helperText={(formik.touched.birthday && formik.errors.birthday) || ''}
                    />
                  </div>
                  <div className={classNames(styles.form, 'z-10 w-full items-center justify-between flex mt-3')}>
                    <Typography variant="subtitle1" type="regular" className={classNames(styles.whiteColor, 'w-4/12')}>
                      Horoscope:
                    </Typography>
                    <TextField
                      id="outlined-adornment-password"
                      name="horoscope"
                      className="w-7/12 rounded" 
                      placeholder="--"
                      value={profile.data.horoscope}
                      disabled
                    />
                  </div>
                  <div className={classNames(styles.form, 'z-10 w-full items-center justify-between flex mt-3')}>
                    <Typography variant="subtitle1" type="regular" className={classNames(styles.whiteColor, 'w-4/12')}>
                      Zodiac:
                    </Typography>
                    <TextField
                      id="outlined-adornment-password"
                      name="zodiak"
                      className="w-7/12 rounded" 
                      placeholder="--"
                      disabled
                      value={profile.data.zodiac}
                    />
                  </div>
                  <div className={classNames(styles.form, 'z-10 w-full items-center justify-between flex mt-3')}>
                    <Typography variant="subtitle1" type="regular" className={classNames(styles.whiteColor, 'w-4/12')}>
                      Height:
                    </Typography>
                    <TextField
                      id="outlined-adornment-password"
                      name="height"
                      className="w-7/12 rounded" 
                      placeholder="Add Height"
                      InputProps={{
                        endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                      }}
                      type="number"
                      value={formik.values.height}
                      onChange={formik.handleChange} 
                      error={!!(formik.touched.height && formik.errors.height)}
                      helperText={(formik.touched.height && formik.errors.height) || ''}
                    />
                  </div>
                  <div className={classNames(styles.form, 'z-10 w-full items-center justify-between flex mt-3')}>
                    <Typography variant="subtitle1" type="regular" className={classNames(styles.whiteColor, 'w-4/12')}>
                      Weight:
                    </Typography>
                    <TextField
                      id="outlined-start-adornment"
                      name="weight"
                      className="w-7/12 rounded" 
                      placeholder="Add Weight"
                      type="number"
                      InputProps={{
                        endAdornment: <InputAdornment position="end">Cm</InputAdornment>,
                      }}
                      value={formik.values.weight}
                      onChange={formik.handleChange} 
                      error={!!(formik.touched.weight && formik.errors.weight)}
                      helperText={(formik.touched.weight && formik.errors.weight) || ''}
                    />
                  </div>
                  <input type="hidden" name="interests" value={formik.values.interests} />
                </form>
              </>
            ) : (
              <>
                <div className="z-10 w-full items-center justify-between flex">
                  <Typography variant="subtitle1" type="bold">
                    About
                  </Typography>
                  <Button onClick={handleClickShowEdit}>
                    <BorderColorOutlinedIcon fontSize="small" style={{ color: 'white' }} />
                  </Button>
                </div>
                {typeof profile.data.name !== 'undefined' ? (
                  <>
                    <Typography className={classNames(styles.whiteColor, 'pt-6')} variant="subtitle1" type="bold">
                      Birthday : <span className={styles.white}>{profile.data.birthday} (Age {age})</span>
                    </Typography>
                    <Typography className={classNames(styles.whiteColor)} variant="subtitle1" type="bold">
                      Horoscope : <span className={styles.white}>{profile.data.horoscope}</span>
                    </Typography>
                    <Typography className={classNames(styles.whiteColor)} variant="subtitle1" type="bold">
                      Zodiac : <span className={styles.white}>{profile.data.zodiac}</span>
                    </Typography>
                    <Typography className={classNames(styles.whiteColor)} variant="subtitle1" type="bold">
                      Height : <span className={styles.white}>{profile.data.height} Cm</span>
                    </Typography>
                    <Typography className={classNames(styles.whiteColor)} variant="subtitle1" type="bold">
                      Weight : <span className={styles.white}>{profile.data.weight} Kg</span>
                    </Typography>
                  </>
                ) : (
                  <Typography className={classNames(styles.whiteColor, 'pt-6')} variant="subtitle1" type="bold">
                    Add in your your to help others know you better
                  </Typography>
                )}
              </>
            )}
          </div>
        </div>
        <div className='px-4 mt-5'>
          <div className={classNames(styles.backgroundDark, 'pl-4 pt-4 pb-6')}>
            <div className="z-10 w-full items-center justify-between flex">
              <Typography variant="subtitle1" type="bold">
                Interest
              </Typography>
              <Button onClick={goToInterest}>
                <BorderColorOutlinedIcon fontSize="small" style={{ color: 'white' }} />
              </Button>
            </div>
            {profile?.data?.interests?.length !== 0 ? (
              <>
                <div className="flex items-center no-wrap flex-wrap mt-5">
                  {profile?.data?.interests?.map((tag, index) => (
                    <div key={index} className="tag mb-2">
                      {tag}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <Typography className={classNames(styles.whiteColor, 'pt-6')} variant="subtitle1" type="bold">
                  Add in your interest to find a better match
                </Typography>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;