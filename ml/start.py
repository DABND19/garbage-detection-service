import logging
import sys

import requests

from process import main_pipeline


logging.basicConfig(level=logging.INFO, format='%(asctime)s %(message)s')
logger = logging.getLogger()


if __name__ == '__main__':
    if len(sys.argv) != 3:
        logger.error('Please specify photo path and camera id.')
        exit()

    _, photo_path, camera_id, *_ = sys.argv
    logger.info(photo_path)

    garbage_index = main_pipeline(photo_path)
    
    requests.post('http://3.17.12.94:3000/api/add-garbage-info', json={
        'cameraId': camera_id, 
        'garbageIndex': garbage_index
    })
