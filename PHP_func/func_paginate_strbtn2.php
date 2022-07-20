<?php

################ string Button pagination function #########################################
function paginate_str_btn($current_page,$total_pages)
{
    $pagination = '';
    if($total_pages > 0 && $total_pages != 1 && $current_page <= $total_pages){ //verify total pages and current page number
        $pagination .= '<ul class="list-inline mypg">';
        
        $right_links    = $current_page + 2; 
        $previous       = $current_page - 1; //previous link 
        $next           = $current_page + 1; //next link
        $first_link     = true; //boolean var to decide our first link
        
        //ทำ ปุ่ม first ,ปุ่ม previous และ ปุ่มตัวเลข page ทางซ้าย
        if($current_page > 1){//กรณี current active page มากกว่า 1 ให้แสดง first page และ previous page
            $previous_link = ($previous==0)? 1: $previous;
            $pagination .= '<li class="first"><a href="#" data-page="1" title="First" class="btn">&laquo;</a></li>'; //first link
            $pagination .= '<li><a href="#" data-page="'.$previous_link.'" title="Previous" class="btn ">&lt;</a></li>'; //previous link
            $chkleft = $current_page-2;
                for($i = $chkleft; $i < $current_page; $i++){ //Create left-hand side links
                    if($i > 0){
                        $pagination .= '<li><a href="#" data-page="'.$i.'" title="Page'.$i.'" class="btn ">'.$i.'</a></li>';
                    }
                }   
            $first_link = false; //set first link to false
        }
        
        //ทำ active page
        if($first_link){ //ถ้า current active page คือ page แรก
            $pagination .= '<li class="first active">'.$current_page.'</li>';
        }elseif($current_page == $total_pages){ //ถ้า current active page คือ page สุดท้าย
            $pagination .= '<li class="last active">'.$current_page.'</li>';
        }else{ //active page ที่ทำการ คลิกเลือก
            $pagination .= '<li class="active">'.$current_page.'</li>';
        }
        
        //ทำ ปุ่ม last ,ปุ่ม next และ ปุ่มตัวเลข page ทางขวา    
        for($j = $next; $j < $right_links ; $j++){ 
            if($j<=$total_pages){
                $pagination .= '<li><a href="#" data-page="'.$j.'" title="Page '.$j.'" class="btn ">'.$j.'</a></li>';
            }
        }
        if($current_page < $total_pages){ 
				$next_link = ($next > $total_pages) ? $total_pages : $next;
                $pagination .= '<li><a href="#" data-page="'.$next_link.'" title="Next" class="btn ">&gt;</a></li>'; //next link
                $pagination .= '<li class="last"><a href="#" data-page="'.$total_pages.'" title="Last" class="btn ">&raquo;</a></li>'; //last link
        }
        
        $pagination .= '</ul>'; 
    }
    return $pagination; //return string button 
}

