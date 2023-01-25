<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Answer extends Model
{
    use HasFactory;

    protected $fillable = ['content', 'user_id', 'question_id', 'points', 'isAnswer'];

    public function questions(): BelongsTo{
        return $this->belongsTo(Question::class);
    }

    public function user(): BelongsTo{
        return $this->belongsTo(User::class);
    }


}
